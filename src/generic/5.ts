/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair <K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = {key: 'age', value: 23}
const pair2: KeyValuePair<string, string> = {key: 'name', value: 'Marina'}

console.log(pair1.key, pair1.value); // age 23
console.log(pair2); // {key: "name", value: "Marina"}



export {};