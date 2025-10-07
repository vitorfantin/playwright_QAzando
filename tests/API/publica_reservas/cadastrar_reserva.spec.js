import { test, expect } from '@playwright/test';

test.describe('API - Criar nova reserva', () => {

  test('Deve criar uma reserva com sucesso', async ({ request }) => {

    // Corpo da requisição
    const payload = {
      firstname: 'Vitor',
      lastname: 'Fantin',
      totalprice: 969,
      depositpaid: true,
      bookingdates: {
        checkin: '2025-11-01',
        checkout: '2025-12-01'
      },
      additionalneeds: 'Jantar'
    };

    // Faz a requisição POST
    const response = await request.post('https://restful-booker.herokuapp.com/booking', {
      headers: {
        'Content-Type': 'application/json'
      },
      data: payload
    });

    // Valida status da resposta
    expect(response.status(), 'Status da resposta').toBe(200);

    // Converte o corpo da resposta
    const body = await response.json();

    console.log('Resposta da API:', body);

    // Valida se o corpo tem a estrutura esperada
    expect(body).toHaveProperty('bookingid');
    expect(body).toHaveProperty('booking');
    expect(body.booking.firstname).toBe(payload.firstname);
    expect(body.booking.lastname).toBe(payload.lastname);
    expect(body.booking.totalprice).toBe(payload.totalprice);
    expect(body.booking.depositpaid).toBe(payload.depositpaid);
    expect(body.booking.additionalneeds).toBe(payload.additionalneeds);
  });

});
