import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/');
    await page.getByRole('link', { name: ' Login' }).click();
});

test('Login com sucesso', async ({ page }) => {

    await page.locator('#user').fill('vitor@teste.com');
    await page.locator('#password').fill('Teste123456');
    await page.getByRole('checkbox', { name: 'Lembrar de mim' }).check();
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toHaveText('Login realizado');
});

test('Login Falha - Sem preencher e-mail e senha', async ({ page }) => {
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('E-mail inválido.')).toHaveText('E-mail inválido.');
});

test('Login Falha - Preenchendo apenas o campo de e-mail', async ({ page }) => {
    await page.locator('#user').fill('vitor@teste.com');
    await page.getByRole('button', { name: 'login' }).click();
    await expect(page.getByText('Senha inválida.')).toHaveText('Senha inválida.');

})


