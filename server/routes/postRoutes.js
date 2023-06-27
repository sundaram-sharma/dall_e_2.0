import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongodb/models/post.js'

dotenv.config(); //getting environment variable to get populated

const router = express.Router();

export default router;