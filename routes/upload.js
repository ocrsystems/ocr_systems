import express from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import uuid from 'uuid/v1';
import { spawn } from 'child_process';
import upload from '../middleware/uploadMiddleware';

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const imagePath = path.join(__dirname, './../public/images');
    const fileName = `${uuid()}.png`;
    const filePath = path.resolve(`${imagePath}/${fileName}`);
    if (!req.file) throw new Error('Please provide an image');
    await sharp(req.file.buffer).toFile(filePath);
    const text = spawn('tesseract', [`${imagePath}/${fileName}`, `${imagePath}/${fileName}`]);
    text.on('close', (code) => {
      console.log('code', code);
      fs.readFile(`${imagePath}/${fileName}.txt`, (err, data) => {
        console.log('ERROR', err);
        console.log('data', data.toString());
        return res.status(200).send(data.toString());
      });
      // res.setHeader('Content-Type', 'text/html');
      // res.set({'Content-Disposition':'attachment; filename=\'req.params.name\''});
      // return res.sendStatus(200).sendFile(`${imagePath}/${filename}.txt`);
    });
  } catch (error) {
    console.log('Error in Image uploading', error);
    res.status(error.statu || 502).json({ error: error.message });
  }
});

export default router;