const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, '../public');
const imageExtensions = ['.jpg', '.jpeg', '.png'];

// Get all image files
function getAllImages(dir) {
  const files = fs.readdirSync(dir);
  const images = [];
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      images.push(...getAllImages(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        images.push(filePath);
      }
    }
  });
  
  return images;
}

// Convert images using ffmpeg (if available) or imagemagick
function convertToWebP() {
  const images = getAllImages(publicDir);
  
  console.log(`Found ${images.length} images to convert...`);
  
  images.forEach(imagePath => {
    const relativePath = path.relative(publicDir, imagePath);
    const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Skip if WebP already exists
    if (fs.existsSync(outputPath)) {
      console.log(`✓ Already exists: ${relativePath}.webp`);
      return;
    }
    
    try {
      // Try using sips (macOS built-in)
      execSync(`sips -s format webp "${imagePath}" --out "${outputPath}"`, { stdio: 'pipe' });
      console.log(`✓ Converted: ${relativePath} -> ${path.basename(outputPath)}`);
    } catch (error) {
      console.log(`✗ Failed to convert: ${relativePath}`);
    }
  });
  
  console.log('\nConversion complete!');
  console.log('\nNote: Update your code to use .webp extensions:');
  console.log('Example: image.jpg -> image.webp');
}

convertToWebP();
