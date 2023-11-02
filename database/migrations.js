const db = require('../app/database')

const migrate = async () => {
  const conn = await db.getConnection()

  conn.execute('DROP TABLE IF EXISTS books')
  conn.execute('DROP TABLE IF EXISTS categories')
  conn.execute('DROP TABLE IF EXISTS authors')
  conn.execute('DROP TABLE IF EXISTS publishers')

  conn.execute(
    `CREATE TABLE IF NOT EXISTS categories (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL
    )`
  )

  conn.execute(
    `CREATE TABLE IF NOT EXISTS authors (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL
    )`
  )

  conn.execute(
    `CREATE TABLE IF NOT EXISTS publishers (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL
    )`
  )

  // Create a table for books
  conn.execute(
    `CREATE TABLE IF NOT EXISTS books (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      author_id INT NOT NULL,
      category_id INT NOT NULL,
      publisher_id INT NOT NULL,
      published_year INT NOT NULL,
      isbn VARCHAR(13) NOT NULL,
      FOREIGN KEY (author_id) REFERENCES authors(id),
      FOREIGN KEY (category_id) REFERENCES categories(id),
      FOREIGN KEY (publisher_id) REFERENCES publishers(id)
    )`
  )

  conn.release()
}

migrate()
