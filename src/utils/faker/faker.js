const faker = require('faker');
const randomSeed = Math.ceil(Math.random() * 10000);

console.debug('Random seed used by faker: ', randomSeed);

faker.seed(randomSeed);
faker.locale = 'fr';

export default faker;
