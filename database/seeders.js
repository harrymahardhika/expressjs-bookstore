const { faker } = require('@faker-js/faker')
const db = require('../app/database')

for (let i = 0; i < 10; i++) {
  db.query(`INSERT INTO categories (name) VALUES (?)`, [faker.lorem.word()])
}

for (let i = 0; i < 10; i++) {
  db.query(`INSERT INTO authors (name) VALUES (?)`, [faker.person.fullName()])
}

for (let i = 0; i < 10; i++) {
  db.query(`INSERT INTO publishers (name) VALUES (?)`, [faker.company.name()])
}

db.end()
