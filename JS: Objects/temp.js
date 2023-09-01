function findKey(obj, predica) {
  Object.keys(obj)
    .find((key) => predica(obj[key], key, obj));
}

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

console.log(findKey(data, ['user'])); // { user: 'ubuntu' }
console.log(findKey(data, ['os', 'user'])); // { os: 'linux', user: 'ubuntu' }
