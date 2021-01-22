import mercadopago from '../config/mercadopago'

class Pagamento {
    async Pagar(req, res){
        const id = String(Date.now())
        const email =  'joaodev3@gmail.com'
        
        var item = {
            id,
            title: 'notebook lenovo ideaped',
            quantity: 1,
            currency_id:'BRL',
            unit_price: parseFloat(2049.52)
        }
        var dados = {
            items: [item],
            payer: {email},
            external_reference: id
            
        }
        // fazer pagamento
        try{

            const pagamento = await mercadopago.preferences.create(dados)
            return res.redirect(pagamento.body.init_point)
        }
        catch(err){
            console.log('algo deu errado')
            return res.json(err.message)
        }

    }
 }

 export default new Pagamento()