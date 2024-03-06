module.exports = app => {
    const router = require('express').Router()

    const appHandler = require('../handler/app.handler')

    router.get('/', appHandler.wellcome)

    router.get('/gift-list', appHandler.giftList)

    app.use(router)
}