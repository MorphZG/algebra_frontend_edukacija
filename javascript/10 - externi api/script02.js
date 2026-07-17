// XMLHttpRequest API
// (XHR)

var xhr = new XMLHttpRequest();
/*
req.onload = function () {
    console.log(this);
};
*/

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status != 404) {
        const responseData = JSON.parse(this.response);

        const factsArray = responseData.data;
        factsArray.forEach((factObject) => {
            console.log(factObject.fact);
        });

        const factsMapped = factsArray.map((factObject) => {
            return factObject.fact;
        });
        console.log(factsMapped)
    }
};

xhr.open("GET", "https://catfact.ninja/facts");
xhr.send();
