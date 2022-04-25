

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

type Car = {
  name: string
} & { speed: number }



export default function play() {
  const car: Car = {
    name: 'my car',
    speed: 100
  }

  logPerson(person2)
}
