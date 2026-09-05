const fs = require('fs');
const file = 'src/components/sections/Hero.tsx';
let content = fs.readFileSync(file, 'utf8');

const oldStr = `  const lineOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);

  const streamActive = false; // Camera feed disabled for performance

  const titleText = "ANJIMA";`;

const newStr = `  const lineOpacity = useTransform(scrollYProgress, [0.5, 0.7, 1], [0, 1, 1]);
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setStreamActive(true);
        }
      } catch (err) {
        console.log("Camera access denied or unavailable.", err);
      }
    }
    setupCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const titleText = "ANJIMA";`;

content = content.replace(oldStr, newStr);
fs.writeFileSync(file, content);
