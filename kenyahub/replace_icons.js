const fs = require('fs');

const filesToUpdate = [
  'src/components/nav/Navbar.tsx',
  'src/components/tools/ToolShell.tsx',
  'src/components/tools/PinnedToolsHomeSection.tsx',
  'src/app/page.tsx',
  'src/app/tools/page.tsx'
];

for (const file of filesToUpdate) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Add import if missing
  if (!content.includes('DynamicIcon')) {
    const importMatch = [...content.matchAll(/^import .*;$/gm)].pop();
    if (importMatch) {
      const insertionIndex = importMatch.index + importMatch[0].length;
      content = content.slice(0, insertionIndex) + '\nimport DynamicIcon from "@/components/ui/DynamicIcon";' + content.slice(insertionIndex);
    }
  }

  // Common replacements
  content = content.replace(/\{tool\.icon\}/g, '<DynamicIcon emoji={tool.icon} className="w-full h-full" />');
  content = content.replace(/\{cat\.icon\}/g, '<DynamicIcon emoji={cat.icon} className="w-full h-full inline-block" />');
  content = content.replace(/\{rt\.icon\}/g, '<DynamicIcon emoji={rt.icon} className="w-full h-full" />');

  // Fix span wrappers
  // Example: <span className="text-[2rem] tool-icon flex-shrink-0 leading-none"><DynamicIcon ... /></span>
  // With SVG icons, text size doesn't necessarily control them unless using w-em h-em.
  // The className "w-full h-full" will make the SVG fill the span if the span has explicit width/height, 
  // or we can just replace the span with the icon itself where appropriate.
  
  // Let's just wrap it cleanly
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
