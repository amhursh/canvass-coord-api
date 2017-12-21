const supertest = require('supertest')
const app = require('../server/app')

const PATH = '/'

describe('routes: root', () => {

  let request = null
  let server = null

  before((done) => {
    server = app.listen(done)
    request = supertest.agent(server)
  })

  after((done) => {
    server.close(done)
  })

  describe(`GET ${PATH}`, () => {

    it('should return root page with app title', (done) => {
      request
        .get(`${PATH}`)
        .expect(200, 'CanvassCoord API Service')
        .end(done)
    })

  })

})