const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folders = ['public/images/branches', 'public/images/products'];

folders.forEach((folder) => {
  fs.readdirSync(folder).forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

    const filePath = path.join(folder, file);
    const tempPath = filePath + '.temp.jpg';

    sharp(filePath)
      .resize({ width: 1920, withoutEnlargement: true })
      .jpeg({ quality: 75 })
      .toFile(tempPath)
      .then(() => {
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        console.log(`Compressed: ${file}`);
      })
      .catch((err) => console.error(`Failed on ${file}:`, err.message));
  });
});