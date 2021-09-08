import nextConnect from "next-connect";
import multer from 'multer';
import fs from 'fs';

const handler = nextConnect({
    // Handle any other HTTP method
    onNoMatch(req, res) {
      res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
  });

const upload = multer({
    storage: multer.diskStorage({
      destination: './files',
      filename: (req, file, cb) => cb(null, file.originalname),
    }),
  });

handler.post(upload.any(), (req, res) => {

    console.log(`POST /api/files`);

    const file = req.body.file;
    fs.writeFile('uploads/file.jpg', file);

    return res.status(200).json({ data: 'success' });
})

export default handler;

export const config = {
    api: {
      bodyParser: false
    },
  }