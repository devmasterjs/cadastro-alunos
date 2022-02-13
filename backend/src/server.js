import app from './app';

const baseUrl = process.env.BASE_URL;
const port = process.env.DEFAULT_PORT;
app.listen(port, () => {
  console.log('------------------------------------------');
  console.log(`Backend-Server listen on port ${port}`);
  console.log(`CTRL + Click in ${baseUrl}:${port}`);
  console.log('------------------------------------------');
  console.log(`Database Schema: ${process.env.DATABASE_SCHEMA}`);
  console.log(`Database Host..: ${process.env.DATABASE_HOST}`);
  console.log(`Database Port..: ${process.env.DATABASE_PORT}`);
  console.log(`StaticDirectory: [${process.env.STATIC_DIR}]`);
  console.log('------------------------------------------');
});
