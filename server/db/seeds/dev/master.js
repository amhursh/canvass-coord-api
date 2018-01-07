exports.seed = function(knex, Promise) {
  return knex('answers').del()
    .then(() => {
      return knex('questions').del()
    })
    .then(() => {
      return knex('surveys').del()
    })
    .then(() => {
      return knex('targets').del()
    })
    .then(() => {
      return knex('campaigns').del()
    })
    .then(() => {
      return knex('campaigns').insert([
        {
          title: 'Yes on 100',
          description: 'Increase in tax revenue earmarked for schools and housing',
          created_at: new Date,
          updated_at: new Date
        },
        {
          title: 'Jones for Senate',
          description: 'Campaign for David Jones Senate campaign. Seeking to represent the great state of Colroado',
          created_at: new Date,
          updated_at: new Date
        },
        {
          title: 'Girl Scout Cookies',
          description: 'yummy',
          created_at: new Date,
          updated_at: new Date
        }
      ])
    })
    .then(() => {
      return knex('targets').insert([
        { 
          "first_name": "Aaron",
          "last_name": "James",
          "street_number": "25",
          "street_name": "Foxface Circle",
          "unit": null,
          "city": "Englewood",
          "state": "CO",
          "zip": "80112",
          "affiliation": "D",
          "created_at": new Date,
          "updated_at": new Date,
          "campaign_id": 1,
          "is_visited": false
        },
        {
          "first_name": "Sara",
          "last_name": "Smith",
          "street_number": "2131",
          "street_name": "Lawrence Street",
          "unit": "123",
          "city": "Denver",
          "state": "CO",
          "zip": "80204",
          "affiliation": "R",
          "created_at": new Date,
          "updated_at": new Date,
          "campaign_id": 1,
          "is_visited": false
        }
      ])
    })
    .then(() => {
      return knex('surveys').insert([
        {
          "title": "Yes on 100 - General Questions",
          "campaign_id": 1
        },
        {
          "title": "Push Poll",
          "campaign_id": 1
        }
      ])
    })
    .then(() => {
      return knex('questions').insert([
        {
          "body": "What do you think about increased funding for schools?",
          "survey_id": 1
        },
        {
          "body": "Have you voted on this kind of issue before?",
          "survey_id": 1
        },
        {
          "body": "How likely are you to vote?",
          "survey_id": 1
        },
        {
          "body": "What are your general thoughts on housing availability here?",
          "survey_id": 1
        },
        {
          "body": "Are you active in politics?",
          "survey_id": 1
        },
        {
          "body": "Do you have any kids?",
          "survey_id": 1
        },
        {
          "body": "Do you care about the children in this community?",
          "survey_id": 2
        },
        {
          "body": "The other side is funded by bad corporations. What do you think about this?",
          "survey_id": 2
        },
        {
          "body": "Other counties get more money for schools. Is that fair?",
          "survey_id": 2
        },
        {
          "body": "Do you feel that the high housing costs here are acceptable?",
          "survey_id": 2
        }
      ])
    })
}


