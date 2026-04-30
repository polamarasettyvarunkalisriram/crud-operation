const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'crud_operation',
    waitForConnections: true,
});

const testConnection = async () => {
    try {
        const conn = await db.getConnection();
        console.log('✅ Database connected');
        conn.release();
    } catch (err) {
        console.error('❌ Database connection failed:', err);
    }
};

module.exports = { db, testConnection };