// localStorage.setItem() : used for store/write data
// localStorage.getItem() : used for read data
// JSON.stringify() : set data as json format
// JSON.parse() : get data as javaScript object format

let db = {};
const addToDb = (item) => {
    // three ways to add a property to an object
    // db.alom = 1;
    // db['alom'] = 1;
    // db[item] = 1;


    // get data from localStorage as js object
    const storedTracker = localStorage.getItem('checka-tracker');
    if(storedTracker){
        db = JSON.parse(storedTracker);
    }

    // check the data is available in the object, if available then increasd by 1 else add new item.
    if (item in db) {
        db[item] = db[item] + 1;
    }
    else {
        db[item] = 1;
    }

    localStorage.setItem('checka-tracker', JSON.stringify(db));
}

// remove item from localStorage
const removeItem = item => {
    const storedTracker = localStorage.getItem('checka-tracker');
    if(storedTracker){
        const storedObject = JSON.parse(storedTracker);
        delete storedObject[item];
        localStorage.setItem('checka-tracker', JSON.stringify(storedObject));
    }
}