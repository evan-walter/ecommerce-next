export default function play() {
  const name = 'Evan'
  const age = 29

  function logPersonInfo(personName: string, personAge: ) {
    const info = `Name: ${personName}, Age: ${personAge}`
    console.log(info)
    return info
  }

  logPersonInfo(name, age)
}
