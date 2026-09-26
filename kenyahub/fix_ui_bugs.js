const fs = require('fs');

// 1. Fix Navbar
let navbar = fs.readFileSync('src/components/nav/Navbar.tsx', 'utf8');

// Fix dropdown hover gap by wrapping the inner box with pt-2
navbar = navbar.replace(
  /<div className="absolute top-full right-0 mt-2 w-\[720px\] rounded-2xl border border-border bg-bg-card\/95 backdrop-blur-xl shadow-2xl shadow-black\/30 p-6 animate-fade-in-up">/,
  '<div className="absolute top-full right-0 pt-2 w-[720px] animate-fade-in-up z-50">\n                    <div className="rounded-2xl border border-border bg-bg-card/95 backdrop-blur-xl shadow-2xl shadow-black/30 p-6">'
);

// Close the wrapper
navbar = navbar.replace(
  /Official Kenya data sources\s*<\/span>\s*<\/div>\s*<\/div>\s*\)}/m,
  'Official Kenya data sources\n                      </span>\n                    </div>\n                  </div>\n                  </div>\n                )}'
);

// Remove slice(0, 3) limit
navbar = navbar.replace(/\.slice\(0, 3\)/g, '');

fs.writeFileSync('src/components/nav/Navbar.tsx', navbar, 'utf8');


// 2. Fix Translator Compare search input
let translator = fs.readFileSync('src/app/tools/kenyan-translator/page.tsx', 'utf8');

const compareSearchTarget = `<div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type an English word to compare... e.g. 'hello', 'water', 'mother'"
                  className="input-field text-sm w-full pl-10"
                  id="compare-search"
                  autoComplete="off"
                />
              </div>`;

const compareSearchReplacement = `<SearchInput
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onClear={() => setSearchQuery("")}
                  placeholder="Type an English word to compare..."
                  id="compare-search"
                />`;

translator = translator.replace(compareSearchTarget, compareSearchReplacement);

fs.writeFileSync('src/app/tools/kenyan-translator/page.tsx', translator, 'utf8');

console.log('Fixed Navbar and Translator!');
