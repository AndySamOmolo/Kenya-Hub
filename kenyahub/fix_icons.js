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

  // Fix massive icons: w-full h-full -> w-[1em] h-[1em] so they inherit the parent's font-size naturally!
  // This is the best way to handle icons in text or arbitrary containers.
  content = content.replace(/className="w-full h-full inline-block"/g, 'className="w-[1em] h-[1em] inline-block mb-[0.1em]"');
  content = content.replace(/className="w-full h-full"/g, 'className="w-[1em] h-[1em]"');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated icons in ${file}`);
  }
}
