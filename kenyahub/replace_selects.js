const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = [
  ...walk(path.join(__dirname, 'src', 'app')),
  ...walk(path.join(__dirname, 'src', 'components'))
];

let modifiedCount = 0;

for (const file of files) {
  // Skip the CustomSelect component itself and the translator page which we already did
  if (file.includes('CustomSelect.tsx') || file.includes('kenyan-translator')) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Quick check if file has `<select`
  if (!content.includes('<select')) continue;
  
  // 1. Replace <select with <CustomSelect
  content = content.replace(/<select/g, '<CustomSelect');
  // 2. Replace </select> with </CustomSelect>
  content = content.replace(/<\/select>/g, '</CustomSelect>');
  
  // 3. Add import if missing
  if (!content.includes('CustomSelect')) {
     console.log(`Failed to inject custom select cleanly in ${file}`);
     continue;
  }
  if (!content.includes('@/components/ui/CustomSelect')) {
    // Find the last import statement
    const importMatch = [...content.matchAll(/^import .*;$/gm)].pop();
    if (importMatch) {
      const insertionIndex = importMatch.index + importMatch[0].length;
      content = content.slice(0, insertionIndex) + '\nimport CustomSelect from "@/components/ui/CustomSelect";' + content.slice(insertionIndex);
    } else {
      // Just put it at the very top after "use client"; if it exists
      if (content.startsWith('"use client";')) {
         content = '"use client";\nimport CustomSelect from "@/components/ui/CustomSelect";\n' + content.slice(13);
      } else {
         content = 'import CustomSelect from "@/components/ui/CustomSelect";\n' + content;
      }
    }
  }
  
  fs.writeFileSync(file, content, 'utf8');
  modifiedCount++;
  console.log(`Updated ${file}`);
}

console.log(`Done! Modified ${modifiedCount} files.`);
