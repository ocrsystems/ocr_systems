import express from 'express';
import fs from 'fs';
import path from 'path';
import uuid from 'uuid';
import upload from '../middleware/uploadMiddleware';
import { getTextFromImage } from './../utils';

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const imagePath: string = path.join(`${__dirname}/../`, 'tmp');
    const uniqueId: string = uuid.v1();
    const fileName: string = `${uniqueId}.png`;
    const txtFileName: string = `${uniqueId}.txt`;
    const filePath: string = path.resolve(`${imagePath}/${fileName}`);

    if (!req.body.file) throw new Error('Please provide an image');

    const buf = Buffer.from(req.body.file.buffer.replace(/^data:image\/\w+;base64,/, ''), 'base64');

    fs.writeFileSync(filePath, buf, 'binary');

    const config = {
      lang: req.body.language,
    };

    const text = await getTextFromImage(config, `${imagePath}/${fileName}`);

    fs.writeFileSync(`${imagePath}/${txtFileName}`, Buffer.from(text as string), 'binary');

    return res.status(200).send(text);
  } catch (error) {
    console.log('Error in Image uploading', error);
    return res.status(error.status || 502).json({ error: error.message });
  }
});

export default router;
