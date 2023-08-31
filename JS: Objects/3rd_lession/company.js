function is(company1, company2) {
  const keys = ['name', 'state', 'website'];
  for (const key of keys) {
    if (company1[key] === company2[key]) {
      return true;
    }
  }
  return false;
}

export default is;

// const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
// const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
// console.log(is(company1, company2)); // false
