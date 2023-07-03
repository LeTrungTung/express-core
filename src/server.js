const app = require('./app/app');

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server Express running at http://localhost:${PORT}`);
});
