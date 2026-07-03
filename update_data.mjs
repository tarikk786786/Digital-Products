import fs from 'fs';

const dataFile = './src/data.json';
const data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));

// Filter out garbage from courses
data.courses = data.courses.filter(c => 
  !c.title.includes('Explore Our') && 
  !c.title.includes('Important Links') && 
  !c.title.includes('Learning paths')
);

// Filter out garbage from ebooks
data.ebooks = data.ebooks.filter(e => 
  !e.title.includes('Important Links') && 
  !e.title.includes('Learning paths') && 
  !e.title.includes('Intimacy Guides')
);

// Manually add the real ebooks that were missed
const realEbooks = [
  {
    category: 'Ebook',
    title: '51 Positions For Every Week In 365 Days',
    price: '₹299',
    image: '/assets/Group-585-1.png',
    link: '#'
  },
  {
    category: 'Ebook',
    title: '69 Ideas To Spice Up Sex Life',
    price: '₹299',
    image: '/assets/Group-585-1.png', // reusing image as fallback
    link: '#'
  }
];

data.ebooks = realEbooks;

// Update prices for courses
data.courses = data.courses.map(c => ({
  ...c,
  price: '₹999'
}));

// Add bundles
data.bundles = [
  {
    category: 'Bundle',
    title: 'All Ebooks Bundle - Ultimate Collection',
    price: '₹299',
    image: '/assets/Group-585-1.png',
    link: '#',
    description: 'Get all our premium ebooks in one massive bundle.'
  },
  {
    category: 'Bundle',
    title: 'All Courses Bundle - Mastery Collection',
    price: '₹999',
    image: '/assets/untitled-design-a9e3ef130a357b91cb025d0f6c2ef048.png',
    link: '#',
    description: 'Get lifetime access to every single course we offer.'
  }
];

fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
console.log('data.json updated with bundles and fixed prices.');
