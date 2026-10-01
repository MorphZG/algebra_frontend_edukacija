export default function Dog({dogName, dogAge, onNameChange}) {
  return (
    <>
    <h1>My dog is named {dogName}</h1>
    <p>Luckily it is only {dogAge} old</p>
    <input value={dogName} onChange= {onNameChange} />
    </>
  )
}
