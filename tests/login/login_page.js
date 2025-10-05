const { expect } = require('@playwright/test');

const inserirEmail = async (page, email) => {
    await page.locator('#user').fill(email);
};

const inserirSenha = async (page, senha) => {
    await page.locator('#password').fill(senha);
};

const clicarLogin = async (page) => {
    await page.getByRole('button', { name: 'login' }).click();
};

const verificarLogin = async (page) => {
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toHaveText('Login realizado');
};

const validarMsgErro = async (page, atributo, textoParaValidar) => {
    await expect(page.getByText(atributo)).toHaveText(textoParaValidar);
};

const validarMsgErroEmail = async (page, textoParaValidar) => {
    await expect(page.getByText('E-mail inválido.')).toHaveText(textoParaValidar);
};

const validarMsgErroSenha = async (page, textoParaValidar) => {
    await expect(page.getByText('Senha inválida.')).toHaveText(textoParaValidar);
};

module.exports = {
    inserirEmail,
    inserirSenha,
    clicarLogin,
    verificarLogin,
    validarMsgErro,
    validarMsgErroEmail,
    validarMsgErroSenha
};