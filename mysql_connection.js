

require('dotenv').config();
const mysql = require('mysql2/promise');

async function getConnection() {
	const config = {
		host: process.env.DB_HOST || 'localhost',
		user: process.env.DB_USER || 'root',
		password: process.env.DB_PASS || '',
		database: process.env.DB_NAME || 'test'
	};

	// Note: this function returns a connection promise; callers should handle errors
	const connection = await mysql.createConnection(config);
	return connection;
}

module.exports = { getConnection };
