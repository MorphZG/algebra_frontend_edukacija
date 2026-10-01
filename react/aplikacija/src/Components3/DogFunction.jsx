export default function DogFunction(props) {
  const {nickname, breed, age} = props
  return(
    <>
    <p>my name is {nickname} i am {breed} and {age} years old</p>
    </>
  )
}