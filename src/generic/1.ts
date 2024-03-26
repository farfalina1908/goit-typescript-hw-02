/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise <T extends [string, number]> (): Promise <T>  {
  return new Promise <T> ((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise<[string, number]>()
.then((data) => {
  console.log(data);
});

// другой вариант:
// function getPromise(): Promise<[string, number]> {
//   return new Promise<[string, number]>((resolve) => {
//     resolve(['Text', 50]);
//   });
// }

// getPromise()
//   .then((data) => {
//     console.log(data); // Выведет: ['Text', 50]
//   });


export {};