
const search= ()=>{

    $("#container2").empty();

let breed = document.getElementById("breed").value;

let= breed2 = breed.replace(/\s+/g, '-') + "/images";

console.log(breed2)

const request2 = "https://dog.ceo/api/breed/" + breed2;
console.log(request2);

const request = fetch(request2);



request.then(res => res.json()).then(data => {
    /* let dogs = data.message.slice(0,9); */
    if (data.status !== "error"){
    let dogs2 = [];

    for (i=0;i<3;i++){
        dogs2.push(data.message[(Math.floor(Math.random() * 101))])
    }
    console.log(dogs2)
    
    function myFunction(item) {
        let img= `<img src="${item}" class="circle responsive-img"/>`;
        $("#container2").append(img);
        }
    
    dogs2.forEach(myFunction);
    }else{
        $("#container2").append(`<p class="notfound">${data.message}</p>`)
    }
});

}

document.getElementById("search").addEventListener("click", search);