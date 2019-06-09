exports.seed = function(knex, Promise) {
    return knex("ingredients").insert([
	{name: "chips"},
	{name: "ground beef"},
	{name: "black olives"}
    ])
};
