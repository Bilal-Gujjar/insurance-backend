import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import recommendationRoutes from './routes/recommendation';
import { limiter } from './middlewares/rateLimit';
import { log } from './utils/logger';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use((req, res, next) => {
  log(`${req.method} request to ${req.url}`);
  next();
}); 


app.use(limiter);

app.use('/api/v1/recommendation', recommendationRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
