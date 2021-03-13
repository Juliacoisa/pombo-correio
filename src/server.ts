import express from 'express'; // Importa Framework Express

const app = express() // instancia do E$xpress
const port = 3003 // Porta e Acesso

app.get('/', (req, res) => {
    res.send('Hello Word!') // Retorno daRota GET
})

app.listen(port, ()=> {
    console.log(`Servidor rodando em: http://Localhost:${port}`) // Retorno do servidor
})
                                                            