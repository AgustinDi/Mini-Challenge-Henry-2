require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  PGUSER, PGPASSWORD, PGHOST, PGDATABASE, PGPORT,
} = process.env;

const sequelize = process.env.NODE_ENV === "production"
  ? new Sequelize({
    database: PGDATABASE,
    dialect: "postgres",
    host: PGHOST,
    port: PGPORT || 5432,
    username: PGUSER,
    password: PGPASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
  })
  : new Sequelize(
    `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
try{
  modelDefiners.forEach(model => model(sequelize));
} catch (e) {
  console.log(e.message)
}
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Departamento, Empleado, Localidad, Puesto } = sequelize.models;

Localidad.hasMany(Departamento);
Departamento.belongsTo(Localidad);

Departamento.hasMany(Empleado);
Empleado.belongsTo(Departamento);

Puesto.hasMany(Empleado);
Empleado.belongsTo(Puesto);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
