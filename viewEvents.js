const viewEventInit = () => {
    $("#searchBtn").on("click", () => {
        let searchQ = $("#input").val();
        let myUrl = "https://deezerdevs-deezer.p.rapidapi.com/search?rapidapi-key=0553c29e4bmsh3a239d5a07dbdb4p1e9ae1jsnc9399dacde13&q=" + searchQ;

        if ($("#input").val().length != 0) {
            doApi(myUrl);
        }

        $("#input").val("");
    })

    $("#select_sort").on("change", () => {
        sortGameBy($("#select_sort").val());
    })

    $("#input").on("keyup", (eve) => {
        if (eve.keyCode === 13) {
            eve.preventDefault();
            $("#searchBtn").click();
        }
    })

}
const secsToMints = (_secs) => {
    let mins = Math.floor(_secs / 60);
    if (mins < 10) {
        mins = "0" + mins;
    }
    let secs = _secs % 60;
    if (secs < 10) {
        secs = "0" + secs;
    }
    return mins + ":" + secs;
}