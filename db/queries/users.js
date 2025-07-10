import client from '../client.js';

export async function createUser(username, password) {
    const sql = await client.query(`INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;`, [username, password])

    return sql.rows[0]
}

export async function findUsername(username) {
    const sql = await client.query(`SELECT * FROM users WHERE username = $1`, [username])
    return sql.rows[0]
}