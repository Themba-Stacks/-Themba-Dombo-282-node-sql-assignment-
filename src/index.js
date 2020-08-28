const Pool = require("pg").Pool;
const pool = new Pool({
    user: "user",
    host: "localhost",
    database: "db",
    password: "pass",
    port: 5432
});

function newVisitor(name, age, date, time, assistedby, comment,pol=pool) {
    const sqlcommand = 'INSERT INTO visitors ("name", "age", "date_of_visit", "time_of_visit", "assited_by", "comments") VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
    const sqlvalues = [name, age, date, time, assistedby, comment];
    pol.query(sqlcommand, sqlvalues, (err, res) => {
        if (err) throw err;
        console.log(res.rows);
    })
}

function listAll() {
    pool.query("SELECT id, name FROM visitors", (err, res) => {
        if (err) { throw err };
        console.log(res.rows);
    });
}

function deleteVisitor(id, name) {
    const sqlcommand = `DELETE FROM visitors WHERE ctid = (SELECT ctid FROM visitors WHERE id in ($1) AND name in ($2))`;
    const sqlvalues = [id, name]
    pool.query(sqlcommand, sqlvalues, (err, res) => {
        if (err) { throw err };
        console.log(res.sqlcommand);
    })
}

function updateVisitor(column, newValue, id) {
    if (column == "name" || column == "age" || column == "date_of_visit" || column == "time_of_visit" || column == "assited_by" || column == "comments") {
        const sqlcommand = `UPDATE visitors SET ${column}=($1) WHERE id=($2)`;
        const sqlvalues = [newValue, id]
        pool.query(sqlcommand, sqlvalues, (err, res) => {
            if (err) { throw err };
            console.log(res.sqlcommand);
        })
    } else { console.log("incorrect column name") }
}

function viewVisitor(id) {
    const sqlcommand = `SELECT name,age,date_of_visit,time_of_visit,assited_by,comments FROM visitors WHERE id=($1)`;
    const value = [id]
    pool.query(sqlcommand, value, (err, res) => {
        if (err) { throw err };
        console.log(res.rows);
    });
};

function deleteAll() {
    const sqlcommand = `DELETE FROM visitors`;
    pool.query(sqlcommand, (err, res) => {
        if (err) { throw err };
        console.log(res.sqlcommand);
        console.log(res.rowCount);
    });
};

//newVisitor("Luke",21,"2020/06/01","12:15","Ceasar","for interview");
//updateVisitor('comments','do my laundry and wash my hair','8')
//viewVisitor(8)
//listAll()
//deleteAll();


module.exports = { newVisitor, listAll, deleteVisitor, updateVisitor, viewVisitor, deleteAll };
