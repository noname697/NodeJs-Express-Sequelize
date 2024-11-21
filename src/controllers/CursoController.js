const Controller = require('./Controller.js')
const CursosServices = require('../services/CursoServices.js')

const cursosServices = new CursosServices()

class CursoController extends Controller {
    constructor() {
        super(cursosServices)
    }
};
module.exports = CursoController;