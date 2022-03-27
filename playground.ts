interface Person {
  name: string
  age: number
}


interface BusinessPerson extends Person {
  salary: number
}

interface AcademicPerson extends Person {
  publications: string[]
}

export default function play() {
  const person: AcademicPerson = {
    name: 'John',
    age: 100,
    publications: ['1', '2']
  }
  
  const person: BusinessPerson = {
    name: 'John',
    age: 100,
    salary: 1000
  }

  function logPerson(person: Person) {

  }

  logPerson(person) // or person2
}
