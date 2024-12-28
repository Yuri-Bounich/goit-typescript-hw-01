function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: 'John' }, { mail: 'John@gmail.com' });

console.log(mergedObj);
