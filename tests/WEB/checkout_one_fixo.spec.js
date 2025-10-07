import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://automationpratice.com.br/checkout-one');
});

test('Sucesso - Preenchendo todos os campos obrigatórios', async ({ page }) => {

    await page.getByRole('textbox', { name: 'First name*' }).fill('Vitor');
    await page.getByRole('textbox', { name: 'Last name*' }).fill('Fantin');
    await page.getByRole('textbox', { name: 'Company Name*' }).fill('VFTN Tech');
    await page.getByRole('textbox', { name: 'Email Addresse*' }).fill('vftn@tech.com.br');
    await page.getByLabel('Country*').selectOption('usa');
    await page.getByLabel('State/City*').selectOption('Aland Islands');
    await page.getByRole('textbox', { name: 'Zip Code*' }).fill('13504000');
    await page.getByRole('textbox', { name: 'Full Address*' }).fill('Rua Santos Drummond');
    await page.getByRole('textbox', { name: 'Additional Notes*' }).fill('Entre avenidas 50 e 42');
    await page.getByRole('checkbox', { name: 'Save In Address Book' }).check();
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Billings Information registred with success!' })).toHaveText('Billings Information registred with success!'); //
    await page.getByRole('radio', { name: 'Paypal' }).check();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await expect(page.getByRole('heading', { name: 'Order success!' })).toHaveText('Order success!'); //
});

test('Falha - Validar todas as mensagens de compos obrigatórios', async ({ page }) => {

    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByText('O campo First Name deve ser')).toHaveText('O campo First Name deve ser prenchido');
    await expect(page.getByText('O campo Last Name deve ser')).toHaveText('O campo Last Name deve ser prenchido');
    await expect(page.getByText('O campo Company deve ser')).toHaveText('O campo Company deve ser prenchido');
    await expect(page.getByText('O campo E-mail deve ser')).toHaveText('O campo E-mail deve ser prenchido ou é inválido');
    await expect(page.getByText('O campo Country deve ser')).toHaveText('O campo Country deve ser prenchido');
    await expect(page.getByText('O campo City deve ser')).toHaveText('O campo City deve ser prenchido');
    await expect(page.getByText('O campo Zip Code deve ser')).toHaveText('O campo Zip Code deve ser prenchido');
    await expect(page.getByText('O campo Address deve ser')).toHaveText('O campo Address deve ser prenchido');
    await expect(page.getByText('O campo Additional Notes deve')).toHaveText('O campo Additional Notes deve ser prenchido');
})
