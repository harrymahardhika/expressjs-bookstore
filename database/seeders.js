const { faker } = require('@faker-js/faker')
const db = require('../app/database')

const seed = async () => {
  const conn = await db.getConnection()

  const dataCount = 20

  for (let i = 0; i < dataCount; i++) {
    await conn.query(`INSERT INTO categories (name) VALUES (?)`, [faker.lorem.word()])
  }

  for (let i = 0; i < dataCount; i++) {
    await conn.query(`INSERT INTO authors (name) VALUES (?)`, [faker.person.fullName()])
  }

  for (let i = 0; i < dataCount; i++) {
    await conn.query(`INSERT INTO publishers (name) VALUES (?)`, [faker.company.name()])
  }

  for (let i = 0; i < dataCount; i++) {
    const columns = ['title', 'author_id', 'category_id', 'publisher_id', 'published_year', 'isbn']
      .map((column) => column)
      .join(', ')

    const fake = [
      faker.music.songName(),
      Math.floor(Math.random() * dataCount) + 1,
      Math.floor(Math.random() * dataCount) + 1,
      Math.floor(Math.random() * dataCount) + 1,
      2000,
      faker.finance.iban().substring(0, 13)
    ]

    const placeholder = fake.map(() => '?').join(', ')
    await conn.query(`INSERT INTO books (${columns}) VALUES (${placeholder})`, fake)
  }

  conn.release()
}

seed()
