// Fetch API with async await

const URL = "https://catfact.ninja/facts"

async function getFacts() {
    const res = await fetch(URL)
    const data = await res.json()

    data.data.forEach((element, index) => {
        console.log(`=== Fact No.${index + 1}:\n${element.fact}`)
    })
}

getFacts()