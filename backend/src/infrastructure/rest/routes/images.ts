import express, { Router } from 'express';

var multer = require('multer');
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.env.IMAGES_PATH);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

var imageUpload = multer({ storage });

export default function (app: express.Application) {
  const router = Router();

  router.post('/', imageUpload.single('image'), (req, res) => {
    res.send(req.file?.path);
  });

  app.use('/images', router);
}
