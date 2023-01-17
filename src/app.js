const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.models');
const userRoutes = require('./routes/user.routes');
const coursesRoutes = require('./routes/courses.routes');
const categoryRoutes = require('./routes/category.routes');
const videoRoutes = require('./routes/video.routes')
const app = express();
app.use
const PORT = 8000;
app.use(express.json());

db.authenticate()
  .then( () => console.log("Autenticaion exitosa") )
  .catch( (error) => console.log(error) );

initModels();

db.sync( {force: false} )
  .then( () => console.log("Base de datos sincronizada") )
  .catch( (error) => console.log(error) );

  app.use("/api/v2", userRoutes);
  app.use("/api/v2", coursesRoutes);
  app.use("/api/v2", categoryRoutes);
  app.use("/api/v2", videoRoutes);

app.get('/', (req, res) => {
    res.status(200).json({message: "Bienvenido al servidor"});
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});