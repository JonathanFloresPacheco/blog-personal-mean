import express, { Request, Response } from 'express';
import { Post } from './models/post.model';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const PORT = 3000;

// Conexión a MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogDB');

// Habilitar CORS para todas las rutas
app.use(cors());

app.use(bodyParser.json());

app.get('/show', async (req: Request, res: Response) => {  
  try {
    const posts = await Post.find();
    console.log(posts);
    res.json(posts);
  } catch (error) {
    console.error(error);  // Agrega esta línea para imprimir el error real en la consola
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/show/:postId', async (req: Request, res: Response) => {
    const data = {
    message: 'This is sample data from your REST API get find id' };
    console.log(req.params.postId);
    const post = await Post.findById(req.params.postId);
    res.json(post);
  });

app.post('/api/', async (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const newPost = new Post({ title, content });
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Actualizar un post por ID
app.put('/api/:postId', async (req: Request, res: Response) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.postId, { title, content }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Borrar un post por ID
app.delete('/api/:postId', async (req: Request, res: Response) => {
  try {
    const deletedPost = await Post.findOneAndDelete( {_id: req.params.postId});
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(deletedPost);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
