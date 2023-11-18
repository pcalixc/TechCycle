/* eslint-disable no-undef */

const {Router} = require('express');
const {ConsultarEmpleados, registrarEmpleado} = require('../controllers/users.controller');
const Authentication = require('../controllers/authentication');
const GetUserInfo = require('../controllers/getUserInfo')
const EnviarSolicitudDeVacaciones = require('../controllers/vacations.controller')


const routerEmpleados = Router();


routerEmpleados.get('/employees', ConsultarEmpleados);
routerEmpleados.post('/login', Authentication);
routerEmpleados.put('/new', registrarEmpleado);
routerEmpleados.put('/newvacationrequest', EnviarSolicitudDeVacaciones);
routerEmpleados.get('/:id', GetUserInfo)


module.exports = routerEmpleados;