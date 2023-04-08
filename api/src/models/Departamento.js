const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('departamento', {
    DENOMINACION: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    },{
        timestamps: false
    });
};
