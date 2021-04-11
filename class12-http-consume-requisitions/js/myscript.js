var listElement = document.querySelector('#app'); // to find the id in the html elements

var posts = [];

function nutriApp(){

    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
    .then(r => r.json())
    .then(json => {

        posts = json;
        console.log(posts);

        for (post of posts){ // this for is to run the posts, or, json response
            var titleElement = document.createElement('li'); // create a new li for every post
            var title = document.createTextNode(post.titulo); // titulo is a atribute from the json response

            var imgElement = document.createElement('img');
            imgElement.src = post.capa;
            imgElement.style = 'width: 50px; height: 50px;'

            titleElement.appendChild(title);
            listElement.appendChild(imgElement);
            listElement.appendChild(titleElement);

            

        }


    })

}

nutriApp();

// fetch is a method to consume api

// use fetch('url of the api'): after this, you need to use then if the response is sucefull 
// and catch if this response return a error

// after use then, the response have to return a json (JavaScript Object Notation)
// (response => response.json)

// after return the json, you need to open the json
// so, open the json with the attributtes of api

// to see what will come with this api, make a test

// var posts = []; post=json and console.log(posts);

// -> see the print screen API-response-consolelog-1 and API-response-consolelog-2

// When you make a for run the response json, you need to create somithing to 
// show in the html. See the print screen
