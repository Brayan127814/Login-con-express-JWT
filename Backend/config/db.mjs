import mysql from 'mysql2/promise'


const pool = mysql.createPool({
    user: 'root',
    host: 'localhost',
    password: 'Brayan#16',
    database: 'reservationHotels'
})


export default pool