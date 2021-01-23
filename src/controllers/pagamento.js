import mercadopago from '../config/mercadopago'

class Pagamento {
    async Pagar(req, res){
        const id = String(Date.now())
        const email =  'joaodev3@gmail.com'
        
        const item = {
            id,
            title: 'notebook lenovo ideaped',
            quantity: 1,
            currency_id:'BRL',
            unit_price: parseFloat(2049.52)
        }
        const datas = {
            items: [item],
            payer: {email},
            external_reference: id
            
        }
        // fazer pagamento
        try{

            const pagamento = await mercadopago.preferences.create(datas)
            return res.redirect(pagamento.body.init_point)
        }
        catch(err){
            console.log('error')
            return res.json(err.message)
        }

    }

    async Notification(req, res) {
        const id = req.query.id
        // confirmar pagamento no banco de dados do mercadopago
        
        setTimeout(() => {
        
            try{
                var filter = {
                    "order.id":id
                }
                const data = await mercadopago.payment.search({qs:filter})

                console.log(data)
                
                res.send('OK')
            }catch(err) {
                console.log(err)
            }
    
        },20000)
    
    }
 }

 export default new Pagamento()