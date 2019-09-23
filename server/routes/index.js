var express = require('express');
var router = express.Router();
var fs = require('fs');

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
  res.send('respond with a resource');
});

module.exports = router;
