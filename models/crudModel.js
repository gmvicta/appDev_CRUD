const db = require('../config/db');
const crud = {
    save: (data, callback) => {
        const query = "INSERT INTO appcrud_tbl (fname, lname, email) values(?, ?, ?)";

        db.query(query, [data.fname, data.lname, data.email], callback);
    },
    getAll: (callback) => {
        const query = "SELECT * FROM appcrud_tbl";
        db.query(query, callback);
    }
};

module.exports = crud;