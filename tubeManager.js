let games_ar;

const doApi = async(_url) => {
    let resp = await fetch(_url);
    let data = await resp.json();
    console.log(data);
    createGames(data.data)
}

const createGames = (_ar) => {
    $("#id_row").empty();
    _ar.map(item => {
        createOneGame("#id_row", item)
    })
    games_ar = _ar;
}

const createOneGame = (_parent, item) => {
    let newDiv = $("<div class='p-1 col-lg-3 border col-md-4 col-sm-4'></div>");
    // let newDiv = $("<div class='p-1 border'></div>");
    $(_parent).append(newDiv);

    $(newDiv).append(`
    
    <img src="${item.album.cover_big}" alt="game" class="w-50">
    <h4>${item.title}</h4>
    <h4>${item.artist.name}</h4>
    <h4>${item.album.title}</h4>
    <h4>duration: ${secsToMints(item.duration)}</h4>
    <a href="${item.artist.link}" class="link" target="_blank">Go to album</a>
    <audio width="100" controls="">
    <source id="id_source" src="${item.preview}" type="audio/mpeg">
    </audio>
    
  `)
}

const sortGameBy = (_sort) => {
    games_ar = _.sortBy(games_ar, _sort);
    createGames(games_ar)
}