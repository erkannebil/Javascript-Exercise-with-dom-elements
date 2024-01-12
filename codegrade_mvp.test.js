const { server } = require('./mocks/server')
const { screen } = require('@testing-library/dom')
require('@testing-library/jest-dom/extend-expect')

beforeAll(() => {
  require('./src/index')
  server.listen()
})
afterAll(() => {
  server.close()
})
afterEach(() => {
  server.resetHandlers()
})

describe('sadece sağlıklı çalışıyor mu testi', () => {
  test('[1] eğlence otobüsü başlığı DOM\'da yer alıyor', () => {
    expect(screen.findByText(/eğlence otobüsü/i, { selector: 'h1' }))
  })
})
