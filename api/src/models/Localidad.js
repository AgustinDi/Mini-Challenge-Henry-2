const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modeloS
    sequelize.define('localidad', {
    ACTIVO: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    LOCALIDAD: {
        type: DataTypes.STRING(80)
    }
    },{
        timestamps: false
    });
};
