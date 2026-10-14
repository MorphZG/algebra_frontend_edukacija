import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export default function CatFact() {
    const [facts, setFacts] = useState(null);

    useEffect(() => {
        const fetchData = async (url) => {
            const response = await fetch(url);
            const factData = await response.json();
            console.log(factData)
            setFacts(factData.data);
        };
        fetchData("https://catfact.ninja/facts");
    }, []);

    return (
        <>
            <h1>API pozivanje resursa</h1>

            {facts &&
                facts.map((el, index) => {
                    return (
                        <Card key={index} style={{ width: "200px", padding: "1rem", border: "1px solid #eee" }}>
                            <Card.Img variant="top" src={`https://picsum.photos/id/${index}/200/300`} />
                            <Card.Body>
                                <Card.Title>Random Cat fact: {index + 1}</Card.Title>
                                <Card.Text>{el.fact}</Card.Text>
                            </Card.Body>
                        </Card>
                    );
                })}
        </>
    );
}
