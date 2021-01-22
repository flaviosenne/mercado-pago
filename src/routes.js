import {Router } from 'express'

import pagamento from './controllers/pagamento'

const routes = Router()


routes.get('/', (req, res) => {
    res.send('oi')
})

routes.get('/pagar', pagamento.Pagar)

routes.post('/notificacao', (req, res) => {
    console.log(req.query)
    res.send('OK')
})

export default routes