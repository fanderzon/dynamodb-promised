// Splits an object of query params into 2 objects
// One for any params that matches the defined table keys
// and another object for all other params
// {id: 1, name: 'pony', interests: 'ponying'} -> [{id: 1}, {name: 'pony', interests: 'ponying'}]
export function splitKeysAndParams(params, tableKeys) {
  const keys = Object.keys(tableKeys);
  const paramKeys = Object.keys(params);
  return [
    paramKeys.reduce((acc, curr) => Object.assign(acc,
      keys.includes(curr) && { [curr]: params[curr] }
    ), {}),
    paramKeys.reduce((acc, curr) => Object.assign(acc,
      !keys.includes(curr) && { [curr]: params[curr] }
    ), {})
  ];
}