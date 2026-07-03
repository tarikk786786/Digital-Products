import fs from 'fs';
import path from 'path';
import https from 'https';

const dataPath = path.resolve('../extracted_data.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

const assetsDir = path.resolve('./public/assets');
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    if (!url || !url.startsWith('http')) {
      resolve(null);
      return;
    }
    
    // Some urls might have weird characters or redirect, we'll try simple https get
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`Failed to download ${url}: ${res.statusCode}`);
        resolve(null);
        return;
      }
      
      const fileStream = fs.createWriteStream(filename);
      res.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        resolve(filename);
      });
      
      fileStream.on('error', (err) => {
        console.error(`Error writing ${filename}: ${err.message}`);
        resolve(null);
      });
    }).on('error', (err) => {
      console.error(`Error downloading ${url}: ${err.message}`);
      resolve(null);
    });
  });
}

async function processProducts() {
  const allProducts = [...data.courses, ...data.ebooks];
  const updatedData = {
    courses: [],
    ebooks: []
  };

  for (const product of allProducts) {
    if (!product.image) continue;
    
    // Extract filename from URL
    const urlParts = product.image.split('/');
    let filename = urlParts[urlParts.length - 1].split('?')[0]; // remove query params if any
    if (!filename) filename = `image_${Date.now()}.png`;
    
    const localPath = path.join(assetsDir, filename);
    const relativePath = `/assets/${filename}`;
    
    console.log(`Downloading ${product.image}...`);
    await downloadImage(product.image, localPath);
    
    // Update the image path to be relative
    const updatedProduct = { ...product, image: relativePath };
    
    if (product.category === 'Course') {
      updatedData.courses.push(updatedProduct);
    } else {
      updatedData.ebooks.push(updatedProduct);
    }
  }

  // Write the updated data file to src/data.json
  const srcDataPath = path.resolve('./src/data.json');
  fs.writeFileSync(srcDataPath, JSON.stringify(updatedData, null, 2));
  console.log('Finished downloading images and creating src/data.json');
}

processProducts();
