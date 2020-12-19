const app = require('../../src/app');

describe('\'refill-coins\' service', () => {
  it('registered the service', () => {
    const service = app.service('refill-coins');
    expect(service).toBeTruthy();
  });
});
