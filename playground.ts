
interface Person {
  name: string
}

type CustomArray = {
  [index: number]: string
}

export default function play() {

  const items: CustomArray = ['1', '2', '3']

  type Single = CustomArray[number]
  

}
