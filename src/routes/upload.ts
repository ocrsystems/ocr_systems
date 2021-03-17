import express from 'express';
import fs from 'fs';
import path from 'path';
import uuid from 'uuid';
// import { spawn } from 'child_process';
import upload from '../middleware/uploadMiddleware';
import { getTextFromImage } from './../utils';

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const imagePath = path.join(`${__dirname}/../`, 'tmp');
    console.log('imagePath::', imagePath);
    const fileName = `${uuid.v1()}.png`;
    const txtFileName = `${uuid.v1()}.txt`;
    const filePath = path.resolve(`${imagePath}/${fileName}`);
    console.log('filePath: ', filePath);
    console.log('req.body.file', req.body.language);
    if (!req.body.file) throw new Error('Please provide an image');

    const buf = Buffer.from(req.body.file.buffer.replace(/^data:image\/\w+;base64,/, ''), 'base64');
    fs.writeFile(filePath, buf, 'binary', (err) => {
      if (err) throw new Error('Error in image uploading');
      console.log('The file was saved!');
      return true;
    });
    const config = {
      lang: req.body.language,
    };
    const text = await getTextFromImage(config, `${imagePath}/${fileName}`);
    fs.writeFile(`${imagePath}/${txtFileName}`, Buffer.from(text), 'binary', (err) => {
      if (err) throw new Error('Error in txt saving');
      console.log('The TXT file was saved!');
      return true;
    });
    return res.status(200).send(text);
  } catch (error) {
    console.log('Error in Image uploading', error);
    return res.status(error.status || 502).json({ error: error.message });
  }
});

export default router;
