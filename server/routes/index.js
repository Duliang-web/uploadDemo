var express = require('express');
var router = express.Router();
var fs = require('fs');
let path = require('path');

/* 用于  uploadInputForm 图片上传 */
const formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* uploadInputForm 单图上传 */
router.post('/uploadInputForm', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = './public/images/';
  form.parse(req, function(err, fields, files) {
    fs.renameSync(files.filename.path, form.uploadDir + files.filename.name)
    res.end('upload success')
  })
});

/* uploadInputForm 多图上传 */
router.post('/uploadInputFormMultiple', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = './public/images/';
  form.multiples = true;
  form.parse(req, function(err, fields, files) {
    files.filename.forEach((item) => {
      fs.renameSync(item.path, form.uploadDir + item.name)
    })
    res.end('upload success')
  })
});

/* uploadAxios 单图上传 */
router.post('/uploadAxios', function(req, res, next) {
  var des_file = path.resolve(__dirname, '..') + '/public/images/' + req.files[0].originalname;
  fs.readFile(req.files[0].path, (err, data) => {
    fs.writeFile(des_file, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        res.end('upload success');
      }
    });
  });
});

/* uploadAxios 多图上传 */
router.post('/uploadAxiosMultiple', function(req, res, next) {
  req.files.forEach((item) => {
    var des_file = path.resolve(__dirname, '..') + '/public/images/' + item.originalname;
    fs.readFile(item.path, (err, data) => {
      fs.writeFile(des_file, data, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.end('upload success');
        }
      });
    });
  })
});

/* elementui 单图、多图上传 */
router.post('/elementui', function(req, res, next) {
  req.files.forEach((item) => {
    var des_file = path.resolve(__dirname, '..') + '/public/images/' + item.originalname;
    fs.readFile(item.path, (err, data) => {
      fs.writeFile(des_file, data, (err) => {
        if (err) {
          console.log(err);
        } else {
          res.end('upload success');
        }
      });
    });
  })
});

module.exports = router;
