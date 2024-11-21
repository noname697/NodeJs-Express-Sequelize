const Controller = require('./Controller.js')
const PessoasServices = require('../services/PessoaServices.js')

const pessoasServices = new PessoasServices()

class PessoaController extends Controller {
    constructor() {
        super(pessoasServices)
    }

    async pegaMatriculas(req, res) {
        const { estudanteId } = req.params
        try {
            const listaMatriculas = await pessoasServices.pegaMatriculasPorEstudante(Number(estudanteId))
            return res.status(200).json(listaMatriculas)
        } catch (erro) {

        }
    }
};
module.exports = PessoaController;