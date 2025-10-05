const { test } = require('@playwright/test');
const { faker } = require('@faker-js/faker/locale/pt_BR');
const { inserirEmailCadastro, inserirSenhaCadastro, inserirNomeCadastro, clicarbtnCadastrar, validarMsgCadastro, validarMsgErroEmail, validarMsgErroSenha, validarMsgErroNome } = require('./cadastro_page.js');
test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Cadastro' }).click()
});

test('Cadastro com sucesso', async ({ page }) => {

    await inserirNomeCadastro(page, faker.person.firstName());
    await inserirEmailCadastro(page, faker.internet.email().toLowerCase());
    await inserirSenhaCadastro(page, faker.internet.password());
    await clicarbtnCadastrar(page);
    await validarMsgCadastro(page);
});
test('Verifica mensagem de erro ao tentar cadastrar SEM PREENCHER OS CAMPOS OBRIGATÓRIOS', async ({ page }) => {
    await clicarbtnCadastrar(page);
    await validarMsgErroNome(page, 'O campo nome deve ser prenchido');
});

test('Verica mensagem de erro ao cadastrar PREENCHENDO SOMENTE O CAMPO NOME', async ({ page }) => {
    await inserirNomeCadastro(page, faker.person.firstName());
    await clicarbtnCadastrar(page);
    await validarMsgErroEmail(page, 'O campo e-mail deve ser prenchido corretamente');
});

test('Verica mensagem de erro ao cadastrar preenchedo SOMENTES os campos NOME e EMAIL', async ({ page }) => {
    await inserirNomeCadastro(page, faker.person.firstName());
    await inserirEmailCadastro(page, faker.internet.email().toLowerCase());
    await clicarbtnCadastrar(page);
    await validarMsgErroSenha(page, 'O campo senha deve ter pelo menos 6 dígitos');
});
