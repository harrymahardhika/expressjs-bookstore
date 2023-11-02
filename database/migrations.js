const db = require('../app/database')

db.query('DROP TABLE IF EXISTS books')
db.query('DROP TABLE IF EXISTS categories')
db.query('DROP TABLE IF EXISTS authors')
db.query('DROP TABLE IF EXISTS publishers')

db.query(
  `CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
  )`
)

db.query(
  `CREATE TABLE IF NOT EXISTS authors (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
  )`
)

db.query(
  `CREATE TABLE IF NOT EXISTS publishers (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
  )`
)

// Create a table for books
db.query(
  `CREATE TABLE IF NOT EXISTS books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author_id INT,
    category_id INT,
    publisher_id INT,
    published_year INT,
    isbn VARCHAR(13),
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (category_id) REFERENCES categories(id),
    FOREIGN KEY (publisher_id) REFERENCES publishers(id)
  )`
)

db.end()
