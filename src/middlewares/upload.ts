import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('public'))
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop()
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + ext
    cb(null, uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

export default upload