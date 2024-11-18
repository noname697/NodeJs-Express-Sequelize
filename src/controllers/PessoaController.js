const Controller = require('./Controller.js')
const PessoasServices = require('../services/PessoaServices.js')

const pessoasServices = new PessoasServices()

class PessoaController extends Controller {
    constructor() {
        super(pessoasServices)
    }
};
module.exports = PessoaController;