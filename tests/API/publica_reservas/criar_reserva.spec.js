// tests/api/booking-post.spec.js
import { test, expect } from '@playwright/test';

test('Deve cadastrar uma nova reserva com sucesso', async ({ request }) => {
  const newBooking = {
    firstname: "Vitor",
    lastname: "Fantin",
    totalprice: 969,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-11-01",
      checkout: "2025-12-01"
    },
    additionalneeds: "Jantar"
  };

  const response = await request.post('https://restful-booker.herokuapp.com/booking', {
    headers: { 'Content-Type': 'application/json' },
    data: newBooking
  });

  // ✅ Validações
  expect(response.status(), 'Status da resposta deve ser 200').toBe(200);

  const body = await response.json();
  console.log('Reserva criada:', body);

  // Verifica se retornou bookingid e os dados esperados
  expect(body).toHaveProperty('bookingid');
  expect(body).toHaveProperty('booking');
  expect(body.booking.firstname).toBe(newBooking.firstname);
  expect(body.booking.lastname).toBe(newBooking.lastname);
  expect(body.booking.totalprice).toBe(newBooking.totalprice);
  expect(body.booking.depositpaid).toBe(newBooking.depositpaid);
  expect(body.booking.bookingdates.checkin).toBe(newBooking.bookingdates.checkin);
  expect(body.booking.bookingdates.checkout).toBe(newBooking.bookingdates.checkout);
  expect(body.booking.additionalneeds).toBe(newBooking.additionalneeds);
});
