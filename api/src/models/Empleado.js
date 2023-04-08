const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('empleado', {
    APELLIDO: {
        type: DataTypes.STRING(80),
        allowNull: false,
        primaryKey: true
    },
    COMISION: {
        type: DataTypes.DOUBLE
    },
    FECHAALTA: {
        type: DataTypes.DATE
    },
    NOMBRES: {
        type: DataTypes.STRING(80)
    },
    SUELDO: {
        type: DataTypes.DOUBLE
    }
    },{
        timestamps: false
    });
};
