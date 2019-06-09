
exports.seed = function(knex, Promise) {
    return knex("recipes").insert([
	{name: "del Grande", dish_id: 1},
	{name: "con Queso", dish_id: 1},
	{name: "a la Carte", dish_id: 2}
    ])
};
