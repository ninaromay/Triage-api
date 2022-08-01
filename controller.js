const {bbdd} = require('./bbdd');

const getBarrita = (req, res)=>{
    res.status(200).json({
        status  : 200,
        data    : bbdd,
        error   : ''
    })
}

const getModules = (req, res)=>{
    let response = {
        data   : bbdd.modules,
        status : 200
    }
    res.status(200).json(response)
}

const getModulesById = (req, res)=>{
    let {id} = req.params
    let {modules} = bbdd
    
    let condition   = Number(id) >= 0 && Number(id) < modules.length
    let data        = modules.filter( mod => mod.id === Number(id))
    let status      = condition ? 200 : 204
    let text        = condition ? 'Todo Ok' : 'El ID no existe'
    let response    = { data, status, text }
    res.status(200).json(response)
}

const getCards = (req, res)=>{
    let response = {
        data    : bbdd.cards,
        status  : 200
    }
    res.status(200).json(response)
}

const getCardsById = (req, res) =>{
    let {id} = req.params
    let {cards} = bbdd

    let condition = Number(id) >= 0 && Number(id) < cards.length
    let data = cards.filter(card => card.id === Number(id))
    let status = condition ? 200 : 204
    let text = condition ? 'Todo ok' : 'No existe ID'
    let response = {data, status, text}

    res.status(200).json(response)
}

const getCards2 = (req, res) => {
    let response = {
        data    : bbdd.cards2,
        status  : 200
    }
    res.status(200).json(response)
}

const getCards2ById = (req, res) =>{
    let {id} = req.params
    let {cards2} = bbdd

    let condition = Number(id) >= 0 && Number(id) < cards2.length
    let data = cards2.filter(card => card.id === Number(id))
    let status = condition ? 200 : 204
    let text = condition ? 'Todo ok' : 'No existe ID'
    let response = {data, status, text}

    res.status(200).json(response)
}


module.exports = { 
    getBarrita, 
    getModules, getModulesById, 
    getCards, getCardsById, 
    getCards2, getCards2ById 
}


