'use strict';

module.exports = (app) => {
    const multer = require("multer")
    const storage = multer.memoryStorage()
    const upload = multer({ storage: storage })

    app.post('/upload', upload.single('file'), function (req, res) {
      let fileSize = {
          "size": req.file.size
      }
      res.send(fileSize)
    })
}