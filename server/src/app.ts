import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/api', (req, res) => {
  res.send('hola from api');
});

export default app;
