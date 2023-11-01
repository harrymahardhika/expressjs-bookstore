const mysql = require('mysql2')
const db = require('../database')

class Repository {
  constructor(tableName) {
    this.tableName = tableName
  }

  // Common function to execute a query
  query(sql, values, callback) {
    db.query(sql, values, (err, results) => {
      db.end() // Close the database connection
      if (err) {
        callback(err, null)
      } else {
        callback(null, results)
      }
    })
  }

  // Common function to handle errors
  handleError(err, callback) {
    console.error('Error: ' + err)
    callback(err, null)
  }

  // Get all records
  // Get all records
  getAll(callback) {
    const sql = `SELECT * FROM ${this.tableName}`
    this.query(sql, [], (err, results) => {
      if (err) {
        this.handleError(err, callback)
      } else {
        callback(null, results)
      }
    })
  }

  // Find a record by ID
  findById(recordId, callback) {
    const sql = `SELECT * FROM ${this.tableName} WHERE id = ?`
    this.query(sql, [recordId], (err, results) => {
      if (err) {
        this.handleError(err, callback)
      } else {
        if (results.length === 0) {
          callback('Record not found', null)
        } else {
          callback(null, results[0])
        }
      }
    })
  }

  // Store a new record
  store(data, callback) {
    const sql = `INSERT INTO ${this.tableName} SET ?`
    this.query(sql, data, (err, results) => {
      if (err) {
        this.handleError(err, callback)
      } else {
        callback(null, results.insertId)
      }
    })
  }

  // Update a record by ID
  update(recordId, data, callback) {
    const sql = `UPDATE ${this.tableName} SET ? WHERE id = ?`
    this.query(sql, [data, recordId], (err, results) => {
      if (err) {
        this.handleError(err, callback)
      } else {
        callback(null, results.affectedRows > 0)
      }
    })
  }

  // Delete a record by ID
  delete(recordId, callback) {
    const sql = `DELETE FROM ${this.tableName} WHERE id = ?`
    this.query(sql, [recordId], (err, results) => {
      if (err) {
        this.handleError(err, callback)
      } else {
        callback(null, results.affectedRows > 0)
      }
    })
  }
}

module.exports = Repository
