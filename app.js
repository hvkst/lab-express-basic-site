import express from 'express';
import path from 'path';

// Used by Rico in class
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

const PORT = process.env.PORT || 3000; // Traversy Media...
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
