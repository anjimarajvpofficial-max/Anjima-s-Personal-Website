const fs = require('fs');
let tsConfig = fs.readFileSync('tailwind.config.ts', 'utf8');
tsConfig = tsConfig.replace('import type { Config } from "tailwindcss";', '');
tsConfig = tsConfig.replace('const config: Config = ', 'const config = ');
tsConfig = tsConfig.replace('export default config;', 'module.exports = config;');
fs.writeFileSync('tailwind.config.js', tsConfig);
fs.unlinkSync('tailwind.config.ts');
