// localStorage.setItem() : used for store/write data
// localStorage.getItem() : used for read data
// JSON.stringify() : set data as json format
// JSON.parse() : get data as javaScript object format

const db = {};
const addToDb = (item) => {
    // three ways to add a property to an object
    // db.alom = 1;
    // db['alom'] = 1;
    // db[item] = 1;

    // check the data is available in the object, if available then increasd by 1 else add new item.
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }

    console.log(db);
}