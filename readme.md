# Projeto Lista de Tarefas 📝

Um projeto simples de lista de tarefas desenvolvido com **Node.js**, **Express** e **EJS**.  
Permite adicionar e remover tarefas dinamicamente, renderizando o conteúdo no servidor.

---

## 🚀 Tecnologias utilizadas
- [Node.js](ca://s?q=O_que_%C3%A9_Node.js)
- [Express](ca://s?q=O_que_%C3%A9_Express.js)
- [EJS](ca://s?q=O_que_%C3%A9_EJS)
- [Body-Parser](ca://s?q=Como_usar_bodyParser_no_Express)

---

## 📂 Estrutura do projeto
- **modulos** → módulos e classes auxiliares  
- **public** → arquivos estáticos (CSS, JS, imagens)  
- **views** → templates EJS/HTML  
- **index.js** → configuração principal do servidor  
- **package.json** → dependências e scripts  
- **README.md** → documentação  

---

## ⚙️ Configuração do servidor
Trecho principal de configuração:
```javascript
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```
## 📌 Funcionalidades
Adicionar tarefas
Listar tarefas
Deletar tarefas

## ▶️ Como rodar o projeto
Clone este repositório:

bash
git clone https://github.com/seuusuario/projeto-lista.git
Instale as dependências:

bash
npm install
Inicie o servidor:

bash
node app.js
Acesse no navegador:

Código
http://localhost:3000

🎨 Estilo
O projeto inclui um CSS responsivo em public/style.css para deixar a lista mais agradável e adaptada a dispositivos móveis.
