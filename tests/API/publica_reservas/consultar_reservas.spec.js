// tests/api/booking.spec.js
import { test, expect } from '@playwright/test';

test('Deve retornar status 200 e conter bookingid', async ({ request }) => {
  // Faz a requisição GET para o endpoint
  const response = await request.get('https://restful-booker.herokuapp.com/booking');

  // Valida o status da resposta
  expect(response.status(), 'Status da resposta deve ser 200').toBe(200);

  // Converte o corpo para JSON
  const body = await response.json();

  // Exibe o corpo no console (útil para depuração)
  console.log(body);

  // Valida se contém o campo bookingid (ou se é uma lista de bookings)
  // Esse endpoint retorna um array, então verificamos se há pelo menos um item com bookingid
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('bookingid');
});


test('Deve retornar dados válidos para o ID ', async ({ request }) => {

  const escolhaID = 30;
    // Faz a requisição GET para o endpoint
    const response = await request.get(`https://restful-booker.herokuapp.com/booking/${escolhaID}`);

    // Valida o status da resposta
    expect(response.status(), 'Status da resposta').toBe(200);

    // Converte o corpo da resposta em JSON
    const body = await response.json();

    // Exibe o retorno no console (opcional)
    console.log('Resposta da API:', body);

    // Valida campos esperados no retorno
    expect(body).toHaveProperty('firstname');
    expect(body).toHaveProperty('lastname');
    expect(body).toHaveProperty('totalprice');
    expect(body).toHaveProperty('depositpaid');
    expect(body).toHaveProperty('bookingdates');
  });