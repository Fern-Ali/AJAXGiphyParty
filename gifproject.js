// JavaScript source code


const startBtn = document.getElementById("btn");
let newQuery = document.getElementById('gif').value;
startBtn.addEventListener("click", getGifData);
const restartBtn = document.getElementById("remove");
restartBtn.addEventListener("click", removeGifs);

async function getGifData() {
    const query = document.getElementById('gif').value;
    const searchTermURL = `https://api.giphy.com/v1/gifs/search?api_key=zXJIKbb8iL9bI8XoY0QxkRoYlkpNkxug&q=` + `${query}` + `&limit=1&offset=0&rating=g&lang=en`;
    const response = await axios.get(searchTermURL);
    console.log(response);
    console.log(response.data);
    console.log(response.data.data);
    const gifArray = response.data.data.images;

    

    for (let result of response.data.data) {
        console.log(result.images.original.url);
        



        const ourGifData = result.images.original.url;
        const gif = document.createElement("img");
        
        gif.src = ourGifData;
        gif.id = "removeMe";
        const appendHere = document.getElementById('appendMe');
        appendHere.appendChild(gif);

    }

    
}

function removeGifs() {
    let gifs = document.getElementById("removeMe");
    gifs.remove();
}


