import client from '../client.js';

export async function createPlaylists(mood_id, url) {
    const result = await client.query(`INSERT INTO playlists (mood_id, url) VALUES ($1, $2) RETURNING *;`, [mood_id, url]);
    return result.rows[0];
}