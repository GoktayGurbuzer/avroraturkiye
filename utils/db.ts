import { Pool } from 'pg';

// Veritabanı bağlantı ayarları
const pool = new Pool({
    user: 'avrora',
    host: '78.135.66.67',  // ya da sunucu IP'si
    database: 'avroraTurkey',
    password: 'avrora.turkey',
    port: 5432,
});

// Veritabanı bağlantı fonksiyonu
export const query = async (text: string, params?: any[]) => {
    const client = await pool.connect();
    try {
        const [result] = await Promise.all([client.query(text, params)]);
        return result;
    } finally {
        client.release();
    }
};
