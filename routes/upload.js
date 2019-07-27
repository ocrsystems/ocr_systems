const express = require('express');
const app = express();
const fs = require('fs');
const router = express.Router();
const path = require('path');
const upload = require('./uploadMiddleware');
const Resize = require('./Resize');
const { spawn } = require('child_process');

router.post('/', upload.single('image'), async function (req, res) {
  console.log('post asfityuasgihfoahgiauh');
  const imagePath = path.join(__dirname, './../public/images');
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: 'Please provide an image' });
  }
  const filename = await fileUpload.save(req.file.buffer);
  const text = spawn('tesseract', [`${imagePath}/${filename}`, `${imagePath}/${filename}`]);
  // text.stdout.on('data', (data) => {
  //   console.log(`text`, data);
  // });
  text.on('close', (code) => {
    console.log('code', code);
    const file = fs.readFile(`${imagePath}/${filename}.txt`, (err, data) => {
      console.log("ERROR", err);
      console.log("data", data.toString());
      res.status(200).send(data.toString());
      return;
    });
    // res.setHeader("Content-Type", "text/html");
    // res.set({"Content-Disposition":"attachment; filename=\"req.params.name\""});
    // return res.sendStatus(200).sendFile(`${imagePath}/${filename}.txt`);
  });

});

module.exports = router;