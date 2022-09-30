fetch('./assets/lang/en.json')
    .then((response) => response.json())
    .then((json) => console.log(json));