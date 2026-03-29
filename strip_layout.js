const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir("c:/Users/Bonjour/Desktop/ALERTE'ELEVES/app/(main)", function(filePath) {
  if (filePath.endsWith('page.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    content = content.replace(/import\s*{\s*Navbar\s*}\s*from\s*['"]@\/components\/layout\/Navbar['"];?\r?\n?/g, '');
    content = content.replace(/import\s*{\s*Footer\s*}\s*from\s*['"]@\/components\/layout\/Footer['"];?\r?\n?/g, '');
    
    content = content.replace(/<div className="flex min-h-screen flex-col">\s*<Navbar \/>\s*<main className="flex-1">/g, '<>');
    content = content.replace(/<\/main>\s*<Footer \/>\s*<\/div>/g, '</>');
    
    // Some might not have <main className="flex-1"> but just <main ...> or no main.
    // Let's also do a fallback if they have slight variations:
    content = content.replace(/<div className="flex min-h-screen flex-col">\s*<Navbar \/>/g, '<>');
    
    fs.writeFileSync(filePath, content);
    console.log("Stripped " + filePath);
  }
});
