const { Router } = require("express");
const { Departamento, Empleado, Localidad, Puesto } = require('../db.js');
let router = Router();
const relation = {
    ["Buenos Aires"]:[1,2,3],
    Cordoba:[4,5,6,7],
    Mendoza:[8,9],
    ["Santa Fe"]:[10]   
}

router.get('/', async (req, res, next) => {
    res.send({server: "Las respuestas del 1 al 13 se encuentran agregando un /"})
})

router.get('/1', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll();
        res.send(empleados.map(x=>x.NOMBRES).sort((a, b) => (a > b ? -1 : 1)))
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/2', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll({include: Puesto});
        let resultado = empleados.map(empleado => {
            const {NOMBRES, puesto, departamentoId} = empleado.dataValues
            let Localidad;
            for (const value in relation) {
                if(relation[value].includes(departamentoId)) Localidad = value
            }
            return {
                NOMBRES,
                PUESTO: puesto.dataValues.PUESTO,
                Localidad
            }
        })
        res.send(resultado.filter(x=>x.PUESTO === 'Soporte'))
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.get('/3', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll();
        let empleadosFiltrados = empleados.filter(x=>/.*o$/.test(x.NOMBRES))
        let resultado = empleadosFiltrados.map(x=>{return {NOMBRE: x.dataValues.NOMBRES}})
        res.send(resultado)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.get('/4', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll({include: Puesto});
        let carlosPaz = await Localidad.findOne({where:{LOCALIDAD: "Carlos Paz"}});
        let resultado = empleados.map(empleado => {
            const {NOMBRES, puesto, SUELDO} = empleado.dataValues
            console.log(SUELDO)
            return {
                NOMBRES,
                PUESTO: puesto.dataValues.PUESTO,
                LOCALIDAD: carlosPaz.dataValues.LOCALIDAD,
                SUELDO
            }
        })
        res.send(resultado.filter(x=>x.PUESTO === 'Soporte'))
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.get('/5', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll({include: Puesto});
        let resultado = empleados.map(empleado => {
            const {NOMBRES, SUELDO, puesto, departamentoId} = empleado.dataValues
            let Localidad;
            for (const value in relation) {
                if(relation[value].includes(departamentoId)) Localidad = value
            }
            return {
                NOMBRES,
                SUELDO,
                PUESTO: puesto.dataValues.PUESTO,
                Localidad
            }
        })
        res.send(resultado.filter(x=>x.SUELDO >= 10000 && x.SUELDO <= 13000))
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.get('/6', async (req, res, next) => {
    try {
        const data = await Departamento.findAll({include: [Empleado]});
        const result = data.filter(x=>x.dataValues.empleados.length >= 5)
        res.send(result)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.get('/7', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll({include: Puesto});
        let resultado = empleados.map(empleado => {
            const {NOMBRES, puesto, departamentoId} = empleado.dataValues
            let LOCALIDAD;
            for (const value in relation) {
                if(relation[value].includes(departamentoId)) LOCALIDAD = value
            }
            return {
                NOMBRES,
                PUESTO: puesto.dataValues.PUESTO,
                LOCALIDAD
            }
        })
        res.send(resultado.filter(x=>(x.PUESTO === 'Analista' || x.PUESTO === 'Programador') && x.LOCALIDAD === 'Cordoba'))
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})


router.get('/8', async (req, res, next) => {
    try {
        let empleados = await Empleado.findAll();
        let sueldos = empleados.map(empleado => empleado.SUELDO);
        let suma = 0;
        for (const value of sueldos) {
            suma += value
        }
        let result = suma / sueldos.length;
        console.log(result)
        res.send({media: parseInt(result)})
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.get('/9', async (req, res, next) => {
    try {
        let departamento = await Departamento.findOne({where: {id: 10}, inculde: Empleado})
        let empleados = await Empleado.findAll({where: {departamentoId: 10}});
        res.send({[departamento.dataValues.DENOMINACION]: empleados})
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

router.get('/10', async (req, res, next) => {
    try {
        const empleados = await Empleado.findAll({include: Puesto});
        const empleadosSoporte = empleados.filter(x =>x.dataValues.puesto.dataValues.PUESTO === 'Soporte')
        const sueldos = empleadosSoporte.map(x=>x.dataValues.SUELDO)

        res.send({result: Math.min(...sueldos)})
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})


router.get('/11', async (req, res, next) => {
    try {
        const puestos = await Puesto.findAll({include: Empleado});
        const result = puestos.map(x => {
            const SUMASUELDO = x.empleados.map(y=>y.dataValues.SUELDO)
            return {
            PUESTO: x.PUESTO,
            SUMADESUELDO: SUMASUELDO.reduce((a, b) => a + b, 0)
        }})
        res.send(result)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

module.exports = router;