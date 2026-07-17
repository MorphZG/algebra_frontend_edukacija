// Fetch API

const URL = "https://catfact.ninja/facts";

fetch(URL)
    .then((res) => res.json())
    .then((data) => {
        const facts = data.data;

        facts.forEach((element, index) => {
            console.log(`====Fact no.${index + 1}:\n${element.fact}`);
        });
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        console.warn("Gotov sam!");
    });
