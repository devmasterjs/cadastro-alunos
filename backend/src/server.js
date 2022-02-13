import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log('------------------------------------------');
  console.log(`Backend-Server listen on port ${port}`);
  console.log(`CTRL + Click in http://localhost:${port}`);
  console.log('------------------------------------------');
  console.log(`Database Schema: ${process.env.DATABASE_SCHEMA}`);
  console.log(`Database Host: ${process.env.DATABASE_HOST}`);
  console.log(`Database Port: ${process.env.DATABASE_PORT}`);
  console.log('------------------------------------------');
});
