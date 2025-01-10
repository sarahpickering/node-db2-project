exports.up = function (knex) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.increments("id");
    tbl.string("vin", 17).notNullable().unique();
    tbl.string("make", 128).notNullabel();
    tbl.string("model", 5000).notNullabel();
    tbl.numeric("mileage").unsigned.notNullable();
    tbl.string("title");
    tbl.string("transmission");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars');
};
