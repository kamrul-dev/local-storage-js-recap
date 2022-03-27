
const db = {};
const addToDb = (item) => {
    // db.alom = 1;
    // db['alom'] = 1;
    db[item] = 1;
    console.log(db);
}