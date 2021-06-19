import app from './app';

const port = 3000;
app.listen(port, () => {
  console.log(`Backend-Server listen on port ${port}`);
  console.log(`CTRL + Click in http://localhost:${port}`);
});
