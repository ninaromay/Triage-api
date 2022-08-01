const { getBarrita, getModules, getModulesById, getCards, getCardsById, getCards2, getCards2ById } = require('./controller')


const express = require('express')
const router = express.Router()

router.route('/')
    .get( getBarrita )

router.route('/modules')
    .get( getModules )

router.route('/modules/:id')
    .get( getModulesById )

router.route('/cards')
    .get( getCards )

router.route('/cards/:id')
    .get( getCardsById )

router.route('/cards2')
    .get( getCards2 )

router.route('/cards2/:id')
    .get( getCards2ById )

module.exports = { router }