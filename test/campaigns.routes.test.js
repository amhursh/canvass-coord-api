// const env = process.env.NODE_ENV || 'test'
// const config = require('../knexfile')[env]
// const db = require('knex')(config)

const supertest = require('supertest')
const expect = require('chai').expect

const app = require('../server/app')

const PATH = '/api/v1/campaigns'

describe('routes: campaigns', () => {

  let request = null
  let server = null

  before( (done) => {
    server = app.listen(done)
    request = supertest.agent(server)
  })

  after( (done) => {
    server.close(done)
  })

  // beforeEach( (done) => {
  //   db.raw(
  //     `INSERT INTO campaigns 
  //     (
  //       first_name, 
  //       last_name, 
  //       street_number, 
  //       street_name, 
  //       unit, 
  //       city, 
  //       state, 
  //       zip, 
  //       affiliation
  //     ) 
  //     VALUES 
  //     (
  //       'Aaron',
  //       'James',
  //       '25',
  //       'Foxface Circle',
  //       NULL,
  //       'Englewood',
  //       'CO',
  //       '80112',
  //       'D'
  //     ), 
  //     (
  //       'Sara',
  //       'Smith',
  //       '2131',
  //       'Lawrence Street',
  //       '123',
  //       'Denver',
  //       'CO',
  //       '80203',
  //       'R'
  //     )`
  //   )
  //   .then( () => { done() })
  // })

  // afterEach( (done) => {
  //   db.raw(
  //     `TRUNCATE campaigns RESTART IDENTITY`
  //   )
  //   .then(() => { done() })
  // })

  describe(`GET ${PATH}`, () => {

    it('should return all campaigns', (done) => {
      request
        .get(`${PATH}`)
        .expect(200)
        .end( (err, res) => {
          // console.log(res.body)
          let sara = res.body[1]
          expect(res.body).to.be.an('array')
          expect(sara).to.be.an('object')
          expect(Object.keys(sara).includes('first_name')).to.be.true
          expect(Object.keys(sara).includes('street_name')).to.be.true
          expect(Object.keys(sara).includes('affiliation')).to.be.true
          expect(Object.keys(sara).includes('created_at')).to.be.true

        })
        done()
    })

  })

})