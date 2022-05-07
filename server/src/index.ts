import app from './app';
import config from 'config';
import connect from './utils/connect';

const port = config.get<number>('PORT') || 3001;

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('uncaughtException');
  process.exit(1);
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`App running at http://localhost:${port}`);
  connect();
});

process.on('unHangledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('unHangledRejection');
  server.close(() => {
    process.exit(1);
  });
});
