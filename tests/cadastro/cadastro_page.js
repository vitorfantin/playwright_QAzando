const { expect } = require('@playwright/test');


const inserirNomeCadastro = async (page, nomeCadastro) => {
    await page.locator('#user').fill(nomeCadastro);
};
const inserirEmailCadastro = async (page, email) => {
    await page.locator('#email').fill(email);
};
const inserirSenhaCadastro = async (page, senha) => {
    await page.locator('#password').fill(senha);
};

const clicarbtnCadastrar = async (page) => {
    await page.getByRole('button', { name: 'Cadastrar' }).click();
};

const validarMsgCadastro = async (page,) => {
    await expect(page.getByText('Cadastro realizado!')).toHaveText('Cadastro realizado!');
};

const validarMsgErroEmail = async (page,) => {
    await expect(page.getByText('O campo e-mail deve ser prenchido corretamente')).toHaveText('O campo e-mail deve ser prenchido corretamente');
};
const validarMsgErroSenha = async (page,) => {
    await expect(page.getByText('O campo senha deve ter pelo menos 6 dígitos')).toHaveText('O campo senha deve ter pelo menos 6 dígitos');
};
const validarMsgErroNome = async (page,) => {
    await expect(page.getByText('O campo nome deve ser prenchido')).toHaveText('O campo nome deve ser prenchido');
};
module.exports = {
    inserirEmailCadastro,
    inserirSenhaCadastro,
    inserirNomeCadastro,
    clicarbtnCadastrar,
    validarMsgCadastro,
    validarMsgErroEmail,
    validarMsgErroSenha,
    validarMsgErroNome

}