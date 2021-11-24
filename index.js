const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, ()=> console.log('Voce esta logado na porta 3000'))