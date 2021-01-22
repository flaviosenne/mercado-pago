import {Router } from 'express'

import pagamento from './controllers/pagamento'

const routes = Router()


routes.get('/', (req, res) => {
    res.send('oi')
})

routes.get('/pagar', pagamento.Pagar)

export default routes