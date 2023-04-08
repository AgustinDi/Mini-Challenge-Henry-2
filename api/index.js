const server = require('./src/app.js');
const { Localidad, Departamento, Puesto, Empleado, conn } = require('./src/db.js');
const Ljson = require('./src/Helper/localidad.json');
const Djson = require('./src/Helper/departamento.json');
const Pjson = require('./src/Helper/puesto.json');
const Ejson = require('./src/Helper/empleado.json');

conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    console.log('server working: 3001')
    await Localidad.bulkCreate(Ljson.data);
    await Departamento.bulkCreate(Djson.data);
    await Puesto.bulkCreate(Pjson.data);
    await Empleado.bulkCreate(Ejson.data);
  });
});
