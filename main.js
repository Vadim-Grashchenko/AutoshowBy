async function getResponse() {
    let responce = await fetch('http://localhost:8080/car/cars');
    let content = await responce.json();
    console.log(content);
}

getResponse()