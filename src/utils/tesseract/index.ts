const tesseract = require('node-tesseract-ocr');

const getConfig = (options: any) => {
  return {
    lang: options.lang || 'eng',
    oem: 1,
    psm: 3,
    // load_system_dawg: 0,
    // tessedit_char_whitelist: '0123456789',
    // presets: ['tsv'],
  };
};

export const getTextFromImage = async (options: any, path: string) => {
  try {
    const config = getConfig(options);
    const result = await tesseract.recognize(path, config);
    console.log('Result from tesseract: ', result);
    return result;
  } catch (err: any) {
    console.log('Error in tesseract: ', err);
    throw new Error(err.message);
  }
};

// const text = spawn('tesseract', [`${imagePath}/${fileName}`, `${imagePath}/${fileName}`]);
// text.on('close', (code) => {
//   console.log('code', code);
//   fs.readFile(`${imagePath}/${fileName}.txt`, (err, data) => {
//     if (err) throw new Error('File not find');
//     console.log('data', data.toString());
//     return res.status(200).send(data.toString());
//   });
//   // res.setHeader('Content-Type', 'text/html');
//   // res.set({'Content-Disposition':'attachment; filename=\'req.params.name\''});
//   // return res.sendStatus(200).sendFile(`${imagePath}/${filename}.txt`);
// });

// await sharp(Buffer.from(req.body.file.buffer)).resize(300, 300, {
//   fit: sharp.fit.inside,
//   withoutEnlargement: true
// }).toFile(filePath);
