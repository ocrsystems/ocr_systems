'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _v = require('uuid/v1');

var _v2 = _interopRequireDefault(_v);

var _child_process = require('child_process');

var _uploadMiddleware = require('../middleware/uploadMiddleware');

var _uploadMiddleware2 = _interopRequireDefault(_uploadMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/', _uploadMiddleware2.default.single('image'), function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
    var imagePath, fileName, filePath, buf, text;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            imagePath = _path2.default.join(__dirname, './../public/images');
            fileName = (0, _v2.default)() + '.png';
            filePath = _path2.default.resolve(imagePath + '/' + fileName);

            console.log('req.body.file', (0, _typeof3.default)(req.body.language));

            if (req.body.file) {
              _context.next = 7;
              break;
            }

            throw new Error('Please provide an image');

          case 7:
            // await sharp(Buffer.from(req.body.file.buffer)).resize(300, 300, {
            //   fit: sharp.fit.inside,
            //   withoutEnlargement: true
            // }).toFile(filePath);
            buf = Buffer.from(req.body.file.buffer.replace(/^data:image\/\w+;base64,/, ''), 'base64');

            _fs2.default.writeFile(filePath, buf, 'binary', function (err) {
              if (err) throw new Error('Error in image uploading');
              console.log("The file was saved!");
              return true;
            });
            text = (0, _child_process.spawn)('tesseract', [imagePath + '/' + fileName, imagePath + '/' + fileName]);

            text.on('close', function (code) {
              console.log('code', code);
              _fs2.default.readFile(imagePath + '/' + fileName + '.txt', function (err, data) {
                if (err) throw new Error('File not find');
                console.log('data', data.toString());
                return res.status(200).send(data.toString());
              });
              // res.setHeader('Content-Type', 'text/html');
              // res.set({'Content-Disposition':'attachment; filename=\'req.params.name\''});
              // return res.sendStatus(200).sendFile(`${imagePath}/${filename}.txt`);
            });
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context['catch'](0);

            console.log('Error in Image uploading', _context.t0);
            res.status(_context.t0.statu || 502).json({ error: _context.t0.message });

          case 17:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 13]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

exports.default = router;
module.exports = exports.default;