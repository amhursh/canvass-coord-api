const env = process.env.NODE_ENV || 'test'
const config = require('../knexfile')[env]
const db = require('knex')(config)

const supertest = require('supertest')
const app = require('../server/app')

const PATH = '/api/v1/targets'

describe('routes: targets', () => {

  let request = null
  let server = null

  before( (done) => {
    server = app.listen(done)
    request = supertest.agent(server)
  })

  after( (done) => {
    server.close(done)
  })

  beforeEach( (done) => {
    db.raw(
      `INSERT INTO targets 
      (
        firstName, 
        lastName, 
        streetNumber, 
        streetName, 
        unit, 
        city, 
        state, 
        zip, 
        affiliation
      ) 
      VALUES 
      (
        'Aaron',
        'James',
        '25',
        'Foxface Circle',
        NULL,
        'Englewood',
        'CO',
        '80112',
        'D'
      ), 
      (
        'Sara',
        'Smith',
        '2131',
        'Lawrence Street',
        '123',
        'Denver',
        'CO',
        '80203',
        'R'
      )`
    )
    .then( () => { done() })
  })

  afterEach( (done) => {
    db.raw(
      `TRUNCATE targets RESTART IDENTITY`
    )
    .then(() => { done() })
  })

  describe(`GET ${PATH}`, () => {

    it('should return all targets', (done) => {
      request
        .get(`${PATH}`)
        .expect(200, [
          { 
            "id": "1",
            "firstName": "Aaron",
            "lastName": "James",
            "streetNumber": "25",
            "streetName": "Foxface Circle",
            "unit": null,
            "city": "Englewood",
            "state": "CO",
            "zip": "80112",
            "affiliation": "D"
          },
          {
            "id": "2",
            "firstName": "Sara",
            "lastName": "Smith",
            "streetNumber": "2131",
            "streetName": "Lawrence Street",
            "unit": "123",
            "city": "Denver",
            "state": "CO",
            "zip": "80204",
            "affiliation": "R"
          }
        ])
        .end(done)
    })

  })

})