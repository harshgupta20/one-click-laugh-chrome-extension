async function getJokeData(){
   return await fetch("https://v2.jokeapi.dev/joke/Programming").then(data => data.json())
   .then(data => {
       console.log(data);
    if(data.joke === undefined){
        getJokeData();
    }
    console.log(data.joke);
    document.getElementById("joke-p").innerHTML = `${data.joke}`;
   })
   .catch((error)=> {
        console.log("Error :", error);
    }) 
}

getJokeData();