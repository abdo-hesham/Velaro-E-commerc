const fs = require('fs');
const files = [
  'src/App.tsx',
  'src/pages/ProductPage.tsx',
  'src/components/ProductCard.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace \$ followed by a number with EGP followed by space and the number (e.g. $45.00 -> EGP 45.00)
    // Avoid replacing inside ${...}
    content = content.replace(/\$([0-9]+\.?[0-9]*)/g, 'EGP $1');
    
    // Replace .replace('$', '') with .replace('EGP ', '')
    content = content.replace(/\.replace\('\$', ''\)/g, ".replace('EGP ', '')");
    
    // Replace price || '$89.00' with price || 'EGP 89.00'
    content = content.replace(/\|\|\s*'\$([0-9.]+)'/g, "|| 'EGP $1'");
    
    // Replace >${val} with >EGP ${val}
    content = content.replace(/>\$(?=\{)/g, '>EGP ');
    
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
