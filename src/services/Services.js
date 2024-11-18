const datasource = require('../models')

class Services {
    constructor(nomeDoModel) {
        this.model = nomeDoModel
    }

    async pegaTodosOsRegistros() {
        return datasource[this.model].findAll()
    }

    // async pegaUmRegistroPorId(id) {
    //   return dataSource[this.model].findByPk(id);
    // }

    // async criaRegistro(dadosDoRegistro) {
    //   return dataSource[this.model].create(dadosDoRegistro);
    // }


    async atualizaRegistro(dadosAtualizados, id) {
        const listaDeRegistrosAtualizados = datasource[this.model].update(dadosAtualizados, {
            where: {
                id: id
            }
        })
        if (listaDeRegistrosAtualizados[0] === 0) {
            return false
        }
        return true
    }

    // async excluiRegistro(id) {
    //   return dataSource[this.model].destroy({ where: { id: id } });
    // }
}

module.exports = Services