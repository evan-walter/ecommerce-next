interface Person {
  name: string
  age: number
}

// interface PersonLoggerFn {
//   (name: string, age: number): string
// }

// type PersonLoggerFn = (name: string, age: number) => string

class Person {
  name: string = ''
  age: number = 0

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

export default function play() {
  const name = 'Evan'
  const age = 29

  const person: Person = {
    name: 'John',
    age: 34,
  }

  const logPersonInfo: PersonLoggerFn = (personName: string, personAge: number): string => {
    const info = `Name: ${personName}, Age: ${personAge}`
    console.log(info)
    return info
  }

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, Age: ${person.age}`
    console.log(info)
    return info
  }

  const log = logPersonInfo(name, age)
  logPersonInfo2(person)
}
