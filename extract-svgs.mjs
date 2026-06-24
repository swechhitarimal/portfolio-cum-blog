import fs from 'fs';

const content = fs.readFileSync('src/components/ui/Books.tsx', 'utf-8');
const lines = content.split('\n');

function extractSvg(startLine, endLine, outPath) {
  // Extract SVG lines (startLine to endLine inclusive for svg section)
  const svgLines = lines.slice(startLine, endLine + 1);
  let svg = svgLines.join('\n');

  // Replace `className={className}` with empty string (slightly different per SVG)
  svg = svg.replace(/ className=\{className\}/g, '');

  // Also handle the ATSS case with `size` prop usage - though size isn't in the SVG
  
  fs.writeFileSync(outPath, svg);
  console.log(`Wrote ${outPath} (${svg.length} bytes)`);
}

// ATSS: lines 9-7058 (0-indexed: 8-7058)
extractSvg(8, 7058, 'src/assets/books/atss.svg');

// LionWomen: lines 7069-12472 (0-indexed: 7068-12472)  
extractSvg(7068, 12472, 'src/assets/books/lion-women.svg');

// Malice: lines 12483-65004 (0-indexed: 12482-65004)
extractSvg(12482, 65004, 'src/assets/books/malice.svg');
