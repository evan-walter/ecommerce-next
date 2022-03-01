// ts recommends interfaces over types

// use interfaces to describe data structures in a more natural way
// e.g. describing objects
// e.g. shipment, orders
interface Person {
  name: string
  age: number
}

// use types for type aliases
// e.g. `type Data = string`. here, you can use Data and string types interchangably. interfaces can't do this.
// use types to describe function types
// type Person = {
//   name: string
//   age: number
// }

export default function play() {
  const name = 'Evan'
  const age = 29

  const person: Person = {
    name: 'John',
    age: 34,
  }

  function logPersonInfo(personName: string, personAge: number) {
    const info = `Name: ${personName}, Age: ${personAge}`
    console.log(info)
    return info
  }

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, Age: ${person.age}`
    console.log(info)
    return info
  }

  logPersonInfo(name, age)
  logPersonInfo2(person)
}
