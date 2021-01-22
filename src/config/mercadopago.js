import MercadoPago from 'mercadopago'

MercadoPago.configure({
    sendbox: true,
    access_token: process.env.MERCADO_PAGO_TOKEN_ACCESS
})

export default MercadoPago