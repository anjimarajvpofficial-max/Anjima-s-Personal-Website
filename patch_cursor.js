const fs = require('fs');
let content = fs.readFileSync('src/components/ui/CustomCursor.tsx', 'utf8');

// Add a slow trailing spring
content = content.replace(
  'const smoothY = useSpring(mouseY, { stiffness: 600, damping: 40, mass: 0.5 });',
  'const smoothY = useSpring(mouseY, { stiffness: 600, damping: 40, mass: 0.5 });\n  const slowX = useSpring(mouseX, { stiffness: 100, damping: 20, mass: 1 });\n  const slowY = useSpring(mouseY, { stiffness: 100, damping: 20, mass: 1 });'
);

// Inject the ghost element before the main Crosshair
content = content.replace(
  '{/* Instant Crosshair (replacing the dot) */}',
  `{/* Delayed Ghost Trail */}\n      <motion.div\n        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent pointer-events-none z-[9997] mix-blend-difference hidden md:block rounded-full"\n        style={{ x: slowX, y: slowY, translateX: "-50%", translateY: "-50%", willChange: "transform" }}\n        animate={{ opacity: variant === "text" ? 0 : 0.5 }}\n      />\n\n      {/* Instant Crosshair (replacing the dot) */}`
);

fs.writeFileSync('src/components/ui/CustomCursor.tsx', content);
