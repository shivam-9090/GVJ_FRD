function searchGames() {
    // Declare variables
    let input = document.getElementById('searchBar').value.toUpperCase();
    let gamesSection = document.getElementById('gamesSection');
    let games = gamesSection.getElementsByClassName('game');
    
    // Loop through all game items, and hide those who don't match the search query
    for (let i = 0; i < games.length; i++) {
        let h3 = games[i].getElementsByTagName('h3')[0];
        let txtValue = h3.textContent || h3.innerText;
        if (txtValue.toUpperCase().indexOf(input) > -1) {
            games[i].style.display = "";
        } else {
            games[i].style.display = "none";
        }
    }
}
