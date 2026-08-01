const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.next') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('.');
let changed = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('ease: [0.22, 1, 0.36, 1]')) {
    content = content.replace(/ease: \[0\.22, 1, 0\.36, 1\](?! as)/g, 'ease: [0.22, 1, 0.36, 1] as const');
    fs.writeFileSync(file, content);
    changed++;
    console.log('Fixed ' + file);
  }
});
console.log('Total files changed: ' + changed);
