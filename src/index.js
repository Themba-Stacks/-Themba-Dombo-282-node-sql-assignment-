const Pool = require("pg").Pool;
const pool = new Pool({
    user: "user",
    host: "localhost",
    database: "db",
    password: "pass",
    port: 5432
});

function newVisitor(name, age, date, time, assistedby, comment, nvPool=pool) {
    const sqlcmd = 'INSERT INTO visitors ("name", "age", "date_of_visit", "time_of_visit", "assisted_by", "comments") VALUES($1, $2, $3, $4, $5, $6) RETURNING *'
    const sqlvalues = [name, age, date, time, assistedby, comment];
    nvPool.query(sqlcmd, sqlvalues, (err, res) => {
        if (err) throw err;
        console.log(res.rows);
    });
};

function listAll(laPool=pool) {
    laPool.query("SELECT id, name FROM visitors", (err, res) => {
        if (err) { throw err };
        console.log(res.rows);
    });
};

function deleteVisitor(id, name, dvPool=pool) {
    const sqlcmd = `DELETE FROM visitors WHERE ctid = (SELECT ctid FROM visitors WHERE id in ($1) AND name in ($2))`;
    const sqlvalues = [id, name]
    dvPool.query(sqlcmd, sqlvalues, (err, res) => {
        if (err) { throw err };
        console.log(res.command);
    });
};

function updateVisitor(column, newValue, id, uvPool=pool) {
    if (column == "name" || column == "age" || column == "date_of_visit" || column == "time_of_visit" || column == "assisted_by" || column == "comments") {
        
        const sqlcmd = `UPDATE visitors SET ${column}=($1) WHERE id=($2)`;
        const sqlvalues = [newValue, id]
        uvPool.query(sqlcmd, sqlvalues, (err, res) => {
            if (err) { throw err };
            console.log(res.command);
            if(res.rowCount==0) console.log("id does not exist")
        })
    } else { console.log("incorrect column name") }
};

function viewVisitor(id, vvPool=pool) {
    const sqlcmd = `SELECT * FROM visitors WHERE id=($1)`;
    const value = [id]
    vvPool.query(sqlcmd, value, (err, res) => {
        if (err) { throw err };
        
        if (res.rowCount==0) {
            console.log(`no match for id ${id}`);
        }else{
            console.log(res.rows);
        }
    });
};

function deleteAll(daPool=pool) {
    const sqlcmd = `DELETE FROM visitors`;
    daPool.query(sqlcmd, (err, res) => {
        if (err) { throw err };
        console.log(res.command);
        console.log(res.rowCount);
    });
};

module.exports = { newVisitor, listAll, deleteVisitor, updateVisitor, viewVisitor, deleteAll };
