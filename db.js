var faker = require('faker');
module.exports = () => {

  const data = {
    indexes: [],
    products: [],
    companies: [],
    users: [],
    countries: [],
    contracts: []
  };
  // Create 1000 users
  for(let i =0; i< 1000; i++) {
    data.indexes.push({id: i, name: faker.commerce.product()})
    data.products.push({id: i, name: faker.commerce.product()})
    data.companies.push({id: i, name: faker.company.companyName('{{name.lastName}} {{company.companySuffix}}')})
    data.users.push({id: i, first_name: faker.name.firstName(), last_name: faker.name.lastName()})
    data.countries.push({id: i, name: faker.address.country()})
    data.contracts.push({id: i})
  }
  // Add products reference to index
  data.indexes.forEach(item => {
    item.product = data.products[randomNumber(1000)].id
    item.country = data.countries[randomNumber(1000)].id
  });

  data.companies.forEach(item => item.user = data.users[randomNumber(1000)].id);

  //contracts
  data.contracts.forEach(item => {
    item.index = data.indexes[randomNumber(1000)].id;
    item.company = data.companies[randomNumber(1000)].id;
  });

  return data
}

function randomNumber(number) {
  return Math.floor(Math.random() * number)
}
