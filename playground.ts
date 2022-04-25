

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
}

type RaceCar = {
  speed: number
} & Car & { mileage: number }


export default function play() {
  const car: Car = {
    name: 'my car',
    speed: 100
  }

  logPerson(person2)
}
