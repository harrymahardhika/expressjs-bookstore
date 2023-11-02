const { faker } = require('@faker-js/faker')
const db = require('../app/database')

const seed = async () => {
  const conn = await db.getConnection()

  for (let i = 0; i < 10; i++) {
    conn.query(`INSERT INTO categories (name) VALUES (?)`, [faker.lorem.word()])
  }

  for (let i = 0; i < 10; i++) {
    conn.query(`INSERT INTO authors (name) VALUES (?)`, [faker.person.fullName()])
  }

  for (let i = 0; i < 10; i++) {
    conn.query(`INSERT INTO publishers (name) VALUES (?)`, [faker.company.name()])
  }

  conn.release()
}

seed()
