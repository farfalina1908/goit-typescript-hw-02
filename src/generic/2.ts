/*
  У вас є тип AllType. Існує функція compare, яка приймає два об'єкти. Ці об'єкти містять поля AllType. 
  Ваше завдання – використовувати Pick та generics для вказівки, що поля цих об'єктів належать AllType.
  Функція compare повинна повертати AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number
}



function compare <T extends AllType, U extends AllType>(top: Pick<T, keyof AllType>, bottom: Pick <U, keyof AllType>): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  }
}

const topObject = { name: "Object 1", position: 1, color: "red", weight: 10 };
const bottomObject = { name: "Object 2", position: 2, color: "blue", weight: 20 };

const result = compare(topObject, bottomObject);
console.log(result); // {name: "Object 1", color: "red", position: 2, weight: 20}

export {};