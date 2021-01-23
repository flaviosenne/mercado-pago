import {Router } from 'express'

import payment from './controllers/pagamento'

const routes = Router()


routes.get('/', (req, res) => {
    res.send('oi')
})

routes.get('/pagar', payment.Pagar)

routes.post('/notificacao', payment.Notification)
export default routes