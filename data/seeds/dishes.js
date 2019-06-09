
exports.seed = function(knex, Promise) {
    return knex("dishes").insert([
	{name: "Hot Nachos"}
    ])
};
