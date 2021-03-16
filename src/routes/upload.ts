import express from 'express';
import fs from 'fs';
import path from 'path';
import uuid from 'uuid';
// import { spawn } from 'child_process';
import upload from '../middleware/uploadMiddleware';

const tesseract = require('node-tesseract-ocr');

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const imagePath = path.join(`${__dirname}/../`, './tmp');
    console.log('imagePath::', imagePath);
    const fileName = `${uuid.v1()}.png`;
    const filePath = path.resolve(`${imagePath}/${fileName}`);
    console.log('filePath: ', filePath);
    console.log('req.body.file', typeof req.body.language);
    if (!req.body.file) throw new Error('Please provide an image');
    // await sharp(Buffer.from(req.body.file.buffer)).resize(300, 300, {
    //   fit: sharp.fit.inside,
    //   withoutEnlargement: true
    // }).toFile(filePath);
    const buf = Buffer.from(req.body.file.buffer.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    fs.writeFile(filePath, buf, 'binary', (err) => {
      if (err) throw new Error('Error in image uploading');
      console.log('The file was saved!');
      return true;
    });
    const config = {
      lang: 'eng',
      oem: 1,
      psm: 3,
    };
    tesseract
      .recognize(`${imagePath}/${fileName}`, config)
      .then((text: string) => {
        console.log('Result:', text);
        return res.status(200).send(text);
      })
      .catch((err: any) => {
        console.log('error:', err);
      });

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
  } catch (error) {
    console.log('Error in Image uploading', error);
    res.status(error.status || 502).json({ error: error.message });
  }
});

export default router;
