import mongoose from 'mongoose';
import config from 'config';

export default function connect() {
  const db_uri = config.get<string>('DB_URI');
  mongoose
    .connect(db_uri)
    .then(() => console.log('DB connected successfully'))
    .catch((e) => {
      console.log('DB faild to connect');
      console.log(e);
      process.exit(1);
    });
}
