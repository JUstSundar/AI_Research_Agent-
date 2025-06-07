import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import multer from 'multer';
import fs from 'fs';

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use(express.json());

// === Upload Route (Forwards file to Flask backend) ===
app.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  if (!file || !file.originalname.endsWith('.pdf')) {
    return res.status(400).json({ error: 'Invalid or missing file' });
  }

  const formData = new FormData();
  formData.append('file', fs.createReadStream(file.path), file.originalname);

  try {
    const flaskRes = await fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: formData
    });
    const result = await flaskRes.json();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload to Flask server' });
  } finally {
    fs.unlinkSync(file.path); // delete temp file
  }
});

// === Research Route (Forwards query to Flask backend) ===
app.post('/research', async (req, res) => {
  try {
    const flaskRes = await fetch('http://localhost:5000/research', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const result = await flaskRes.json();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to query Flask server' });
  }
});


app.post('/search', async (req, res) => {
  try {
    const flaskRes = await fetch('http://localhost:5000/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const result = await flaskRes.json();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to perform search' });
  }
});

app.listen(8000, () => console.log('Middleware running on port 8000'));
