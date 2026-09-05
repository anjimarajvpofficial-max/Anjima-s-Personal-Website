export default function Noise() {
  return (
    <div 
      className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.03] " 
      style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")', backgroundRepeat: 'repeat' }}
    />
  );
}
