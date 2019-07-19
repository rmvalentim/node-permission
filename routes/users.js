const express = require('express');
const router = express.Router();

const user = {
    id: 1,
    username: 'rafael.valentim',
    name: 'Rafael Valentim',
    email: 'rafael@grupojcn.com.br'
    
}

// Lista de usuários
router.get('/', (req, res) => {
    const users = [];
    users.push(user);
    users.push(user);
    users.push(user);
    users.push(user);
    res.render('users/index', {users: users});
});

// Detalhe de um usuário
router.get('/view/:id', (req, res) => {
    res.render('users/view', {user: user});
});

// Pagina criação de um usuário
router.get('/new', (req, res) => {
    res.render('users/new');
});

// Rota de criação de usuário
router.post('/new', (req, res) => {
    console.log(req.body);
    res.send('Foi');
});

// Pagina de edição de um usuário
router.get('/edit/:id', (req, res) => {
    res.render('users/edit', {user: user});
});

// Rota de edição de um usuário
router.post('/edit/:id', (req, res) => {

});

// Rota de exclusão de um usuário
router.post('/delete/:id', (req, res) => {
    
});

module.exports = router;