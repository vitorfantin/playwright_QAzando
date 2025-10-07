const { test } = require('@playwright/test');
const { faker } = require('@faker-js/faker/locale/pt_BR');
const {inserirNomeCK2, inserirSobrenomeCK2, inserirNomeEmpresaCK2, inserirEmailCK2,inserirPaisCK2, inserirCidadeCK2, inserirCepCK2, inserirEnderecoCK2, inserirComplementoCK2, salvarEnderecoCK2, clicarBotaoSalvarCK2, validarSalvamentoCK2, selecionarMetodoPagamentoCK2, clicarBotaoComprarCK2, validarCompraCK2 } = require ('./checkout-one_page.js');
test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/checkout-one');
});
test('Checkout One com sucesso', async ({ page }) => {
    // await inserirNomeCK2(page, faker.person.firstName());
    // await inserirSobrenomeCK2(page, faker.person.lastName());
    // await inserirNomeEmpresaCK2(page, faker.company.name());
    // await inserirEmailCK2(page, faker.internet.email().toLowerCase());
    // await inserirPaisCK2(page, 'usa');
    // await inserirCidadeCK2(page, 'Aland Islands');
    // await inserirCepCK2(page, faker.address.zipCode());
    // await inserirEnderecoCK2(page, faker.address.streetAddress());
    // await inserirComplementoCK2(page, faker.address.secondaryAddress());
    // await salvarEnderecoCK2(page);
    // await clicarBotaoSalvarCK2(page);
    // await validarSalvamentoCK2(page, 'Billings Information registred with success!');
    // await selecionarMetodoPagamentoCK2(page);
    // await clicarBotaoComprarCK2(page);
    // await validarCompraCK2(page, 'Order success!');
})
