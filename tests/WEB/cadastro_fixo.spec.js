import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Cadastro' }).click();
});

test('Cadastro com sucesso', async ({ page }) => {

    await page.locator('#user').fill('Vitor');
    await page.locator('#email').fill('vitor@teste.com.br');
    await page.locator('#password').fill('Senha123456');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect(page.getByRole('heading', { name: 'Cadastro realizado!' })).toHaveText('Cadastro realizado!');  // verificar se apareceu popup

});
test('Verifica mensagem de erro ao tentar cadastrar SEM PREENCHER OS CAMPOS OBRIGATÓRIOS', async ({ page }) => {
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect(page.getByText('O campo nome deve ser prenchido')).toBeVisible(); // verificar se apareceu texto
    await expect(page.getByText('O campo nome deve ser prenchido')).toHaveText('O campo nome deve ser prenchido'); // verificar 
});

test('Verica mensagem de erro ao cadastrar PREENCHENDO SOMENTE O CAMPO NOME', async ({ page }) => {
    await page.locator('#user').fill('Vitor');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect(page.getByText('O campo e-mail deve ser')).toHaveText('O campo e-mail deve ser prenchido corretamente'); // verificar 
});

test('Verica mensagem de erro ao cadastrar preenchedo SOMENTES os campos NOME e EMAIL', async ({ page }) => {
    await page.locator('#user').fill('Vitor');
    await page.locator('#email').fill('vitor@vitor.com');
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect(page.getByText('O campo senha deve ter pelo')).toHaveText('O campo senha deve ter pelo menos 6 dígitos'); // verificar 

})

