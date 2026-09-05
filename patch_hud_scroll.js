const fs = require('fs');
let content = fs.readFileSync('src/components/ui/HUD.tsx', 'utf8');

// Replace useScroll with a robust native listener
content = content.replace(
  'const { scrollYProgress } = useScroll();\n  const dotY = useTransform(scrollYProgress, [0, 1], [0, 256]);',
  `const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        setScrollProgress(totalScroll / windowHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);`
);

// Update motion.div to use the native state
content = content.replace(
  'style={{ y: dotY }}',
  'style={{ transform: `translate(-50%, ${scrollProgress * 256}px)` }}'
);

fs.writeFileSync('src/components/ui/HUD.tsx', content);
