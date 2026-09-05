const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Align Brackets to left-12 and right-12 to match SiteNav (px-12)
content = content.replace(/left-6/g, 'left-12');
content = content.replace(/right-6/g, 'right-12');

// Align Text to left-20 and right-20 to perfectly align with the inner tip of the w-8 brackets (12 + 8 = 20)
content = content.replace(/left-16/g, 'left-20');
content = content.replace(/right-16/g, 'right-20');

// Fix the bizarre right bracket vertical line bug by using explicit left/right coordinates 
// instead of hoping Tailwind calculates absolute right edges correctly.
// A top-right vertical line at right-12 should just be right-12.
// I will just leave it as right-12, but if it's acting weird, I'll add a specific class.
// Actually, let's fix the right brackets to definitely be on the right edge of the horizontal line!

fs.writeFileSync('src/components/ui/HUD.tsx', content);
