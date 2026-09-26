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
  if (file.includes('SearchInput.tsx') || file.includes('kenyan-translator')) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Find all <input ... />
  const inputRegex = /<input\s+[\s\S]*?\/>/g;
  
  content = content.replace(inputRegex, (match) => {
    // Only target those with placeholder starting with Search
    if (!match.includes('placeholder="Search') && !match.includes("placeholder='Search") && !match.includes("placeholder={`Search")) {
      return match;
    }
    
    // Replace <input with <SearchInput
    let result = match.replace('<input', '<SearchInput');
    
    // Try to extract the setter from onChange to add onClear
    const onChangeMatch = match.match(/onChange={\(e\)\s*=>\s*([a-zA-Z0-9_]+)\(/);
    if (onChangeMatch && onChangeMatch[1]) {
      const setter = onChangeMatch[1];
      result = result.replace(/\/>$/, ` onClear={() => ${setter}("")} />`);
    }
    
    return result;
  });

  if (content !== originalContent) {
    if (!content.includes('@/components/ui/SearchInput')) {
      const importMatch = [...content.matchAll(/^import .*;$/gm)].pop();
      if (importMatch) {
        const insertionIndex = importMatch.index + importMatch[0].length;
        content = content.slice(0, insertionIndex) + '\nimport SearchInput from "@/components/ui/SearchInput";' + content.slice(insertionIndex);
      } else {
        if (content.startsWith('"use client";')) {
           content = '"use client";\nimport SearchInput from "@/components/ui/SearchInput";\n' + content.slice(13);
        } else {
           content = 'import SearchInput from "@/components/ui/SearchInput";\n' + content;
        }
      }
    }
    fs.writeFileSync(file, content, 'utf8');
    modifiedCount++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Done! Modified ${modifiedCount} files.`);
