const db = require("./dbConfig");

module.exports = {
    getDishes
}

function getDishes() {
    return db("dishes");
}

function getDish(id) {
    return db("dishes")
	.where({id})
	.first()
}

function addDish(dish) {
    return db("dishes")
	.insert(dish, "id")
	.then(([id]) => {
	    return getDish(id)
	});
}


