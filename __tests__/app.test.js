const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('displays plain text hi in the browser', async() => {
    const res = await request(app).get('/');
    expect(res.text).toEqual('hi');
  });
  it('sends hi through /echo', async() => {
    const res = await request(app).post('/echo').send('hi');
    expect(res.text).toEqual('hi');
  });
  it('sends an html h1 with the word head', async() => {
    const res = await request(app).get('/red');
    expect(res.text).toEqual(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1> red </h1>
    </body>
    </html>`);
  });
  it('sends html with an h1 with thhe word green', async() => {
    const res = await request(app).get('/green');
    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> green </h1>
</body>
</html>`);
  });
  it('sends html with an h1 with the word blue', async() => {
    const res = await request(app).get('/blue');
    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> blue </h1>
</body>
</html>`);
  });
});
