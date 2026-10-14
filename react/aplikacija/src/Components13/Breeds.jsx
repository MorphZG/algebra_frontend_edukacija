import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function CatBreed() {
    const [breeds, setBreeds] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            const response = await fetch(url);
            const breedData = await response.json();
            setBreeds(breedData.data);
        };
        fetchData("https://catfact.ninja/breeds");
    }, []);

    return (
        <>
            <h1>API pozivanje resursa</h1>

            {breeds &&
                breeds.map((el, index) => {
                    return (
                        <Card key={index} style={{ width: "200px", padding: "1rem", border: "1px solid #eee" }}>
                            <Card.Img variant="top" src={`https://picsum.photos/id/${index}/200/300`} />
                            <Card.Body>
                                <Card.Title>Random Cat fact: {index + 1}</Card.Title>
                                <Card.Text>
                                    {el.origin === "Mutation" ? "Mutacija" : "Nije Mutacija"}
                                </Card.Text>
                                <Card.Text>{el.origin}</Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
        </>
    );
}
