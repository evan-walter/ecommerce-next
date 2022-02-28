export default function play() {
  const name = 'Evan'
  const age = 29

  function logPersonInfo(personName, personAge) {
    const info = `Name: ${personName}, Age: ${personAge}`
    console.log(info)
    return info
  }

  logPersonInfo(name, age)
  logPersonInfo(true, false)
  logPersonInfo(12, 12)
  logPersonInfo(null, undefined)
}
