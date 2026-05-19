const express = require('express')
const path = require('path');
var bodyParser = require('body-parser')
const app = express()

// 
app.engine('html', require('ejs').renderFile);
// Aqui você está dizendo ao Express que arquivos com extensão .html devem ser processados pelo motor de templates EJS.

app.set('view engine', 'html');
// Define que o motor de views padrão será o html | Isso significa que quando você chamar res.render('pagina'), o Express vai procurar por pagina.html dentro da pasta de views e renderizar usando o motor configurado (EJS).

app.use('/public', express.static(path.join(__dirname, 'public')));
// Configura uma rota /public que serve arquivos estáticos (CSS, JS, imagens).
// express.static transforma a pasta public em acessível via URL.
// Exemplo: se você tiver public/style.css, poderá acessar em http://localhost:3000/public/style.css.

app.set('views', path.join(__dirname, '/views'));
// Define o diretório onde ficam os arquivos de views (templates).
// __dirname é o caminho da pasta atual do projeto, então path.join(__dirname, '/views') aponta para a pasta views.
// Quando você chamar res.render('index'), o Express vai procurar index.html dentro dessa pasta.


app.use(bodyParser.json());   
// Esse middleware permite que o servidor entenda requisições com corpo em formato JSON.    
app.use(bodyParser.urlencoded({
  extended: true
}));

// Esse middleware interpreta dados enviados via formulário HTML (formulários com method="POST").


var tarefas = ['Arrumar o quarto', 'Comprar no supermercado','Ir para a escola', 'Assistir filme'];


app.post('/', (req,res) =>{
    console.log(req.body.tarefa);
    tarefas.push(req.body.tarefa);
    res.render('index', {tarefaslist:tarefas})
})

app.get('/', (req,res)=>{
    res.render('index', {tarefaslist:tarefas})
});

app.get('/deletar/:id', (req , res) => {
    const id = parseInt(req.params.id); // converte para número
    tarefas = tarefas.filter((val, index) => index !== id);

    res.redirect('/'); // redireciona para a página inicial depois de deletar
});


app.listen(5000, ()=>{

    console.log('Server Rodando');

});