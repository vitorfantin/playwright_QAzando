const { test } = require('@playwright/test');
const { inserirEmail, inserirSenha, clicarLogin, verificarLogin, validarMsgErro, validarMsgErroEmail, validarMsgErroSenha } = require('./login_page.js');
const { faker } = require('@faker-js/faker/locale/pt_BR');
test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Login' }).click();
});

test('Login com sucesso', async ({ page }) => {
    await inserirEmail(page, faker.internet.email().toLowerCase());
    await inserirSenha(page, faker.internet.password());
    await clicarLogin(page);
    await verificarLogin(page);
});


test('Login Falha - Sem preencher e-mail e senha', async ({ page }) => {
    await clicarLogin(page);
    await validarMsgErroEmail(page, 'E-mail inválido.');
});

test('Login Falha - Preenchendo apenas o campo de e-mail', async ({ page }) => {
    await inserirEmail(page, faker.internet.email().toLowerCase());
    await clicarLogin(page);
    await validarMsgErroSenha(page, 'Senha inválida.');
});