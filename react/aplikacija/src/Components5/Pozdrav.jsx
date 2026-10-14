import { useEffect } from "react"

export default function Pozdrav() {

  useEffect(() => {
    // args: effect callback, dependancy list
    console.log('Ja sam komponenta Pozdrav!')
  }, [])

  return(
    <h2>Pozdrav iz komponente</h2>
  )

}