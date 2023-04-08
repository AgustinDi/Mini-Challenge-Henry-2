const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('puesto', {
    ACTIVO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PUESTO: {
        type: DataTypes.STRING(80)
    }
    },{
        timestamps: false
    });
};
