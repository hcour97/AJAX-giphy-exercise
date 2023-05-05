const $userQuery = $("#search-gif");
const $gifArea = $("#gif-area");

// APPEND GIF IMAGE TO PAGE
async function appendGif(res) {
    let totalGifs = res.data.length;

    if (totalGifs) { //if there are gifs present,
        let randomIdx = Math.floor(Math.random() * totalGifs);
        let $newCol = $("<div>");
        let $newGif = $("<img>", {
            src: res.data[randomIdx].images.original.url,
            class: "w-100",
        });
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

// RETRIEVE GIF INFO
$("form").on("submit", async function (e) {
    e.preventDefault();

    let searchInput = $userQuery.val()
    $userQuery.val("");

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params : { 
            q: searchInput,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    }
});
    appendGif(res.data);
})

// DELETE ALL GIFS ON PAGE
$("#remove").on("click", async function (e) {
    $gifArea.empty();
})