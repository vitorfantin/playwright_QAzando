const { expect } = require('@playwright/test');

const inserirNomeCK2 = async ({ page, nomeCK }) => {
    await page.getByRole('textbox', { name: 'First name*' }).fill(nomeCK);
};

const inserirSobrenomeCK2 = async ({ page, sobrenomeCK }) => {
    await page.getByRole('textbox', { name: 'Last name*' }).fill(sobrenomeCK);
};

const inserirNomeEmpresaCK2 = async ({ page, empresaCK }) => {
    await page.getByRole('textbox', { name: 'Company Name*' }).fill(empresaCK);
};

const inserirEmailCK2 = async ({ page, emailCK }) => {
    await page.getByRole('textbox', { name: 'Email Addresse*' }).fill(emailCK);
};

const inserirPaisCK2 = async ({ page, paisCK }) => {
    await page.getByLabel('Country*').selectOption(paisCK);
};

const inserirCidadeCK2 = async ({ page, cidadeCK }) => {
    await page.getByLabel('State/City*').selectOption(cidadeCK);
};

const inserirCepCK2 = async ({ page, cepCK }) => {
    await page.getByRole('textbox', { name: 'Zip Code*' }).fill(cepCK);
};
const inserirEnderecoCK2 = async ({ page, enderecoCK }) => {
    await page.getByRole('textbox', { name: 'Full Address*' }).fill(enderecoCK);
};

const inserirComplementoCK2 = async ({ page, complementoCK }) => {
    await page.getByRole('textbox', { name: 'Additional Notes*' }).fill(complementoCK);
};

const salvarEnderecoCK2 = async ({ page }) => {
    await page.getByRole('checkbox', { name: 'Save In Address Book' }).check();
};

const clicarBotaoSalvarCK2 = async ({ page }) => {
    await page.getByRole('button', { name: 'Save' }).click();
};

const validarSalvamentoCK2 = async ({ page, validarMsgValidacao }) => {
    await expect(page.getByRole('heading', { name: 'Billings Information registred with success!' })).toHaveText(validarMsgValidacao);
};
const selecionarMetodoPagamentoCK2 = async ({ page }) => {
    await page.getByRole('radio', { name: 'Paypal' }).check();
};
const clicarBotaoComprarCK2 = async ({ page }) => {
    await page.getByRole('button', { name: 'Place Order' }).click();
};
const validarCompraCK2 = async ({ page, validarMsgCompra }) => {
    await expect(page.getByRole('heading', { name: 'Order success!' })).toHaveText(validarMsgCompra);
};

module.exports = {
    inserirNomeCK2,
    inserirSobrenomeCK2,
    inserirNomeEmpresaCK2,
    inserirEmailCK2,
    inserirPaisCK2,
    inserirCidadeCK2,
    inserirCepCK2,
    inserirEnderecoCK2,
    inserirComplementoCK2,
    salvarEnderecoCK2,
    clicarBotaoSalvarCK2,
    validarSalvamentoCK2,
    selecionarMetodoPagamentoCK2,
    clicarBotaoComprarCK2,
    validarCompraCK2
};