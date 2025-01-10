const cars = [
    {
        vin: '00000000000000000',
        make: 'gmc',
        model: 'yukon'
        mileage: 108000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '00000000000000000',
        make: 'honda',
        model: 'civic'
        mileage: 43000,
        title: 'clean',
    },
    {
        vin: '00000000000000000',
        make: 'dodge',
        model: 'ram'
        mileage: 15000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}