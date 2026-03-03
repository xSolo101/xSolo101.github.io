function findPokemon(pokemonInput) {
   let thePokemon = document.getElementById("pokemonInput").value;
    console.log(thePokemon);
    fetch(`https://pokeapi.co/api/v2/pokemon/${thePokemon}`)
    .then(response => response.json())
        .then(data => {processJSON(data);
        });
}

function processJSON(json){
    let id= json.id;
    let moves = json.moves;
    let sprite = json.sprites.front_default;
    let battleCry= json.cries.latest;
    document.getElementById("pokemonSprite").src = sprite;
    document.getElementById("pokemonAudio").src = battleCry;
    let selectIds = [
        "moveSelect1",
        "moveSelect2",
        "moveSelect3",
        "moveSelect4"
    ];

    selectIds.forEach(id => {
        let select = document.getElementById(id);

        select.innerHTML = "";

        moves.forEach(m => {
            let option = document.createElement("option");
            option.value = m.move.name;
            option.textContent = m.move.name;
            select.appendChild(option);
        });
    });
}

document.getElementById("addToTeamButton").addEventListener("click", addPokemon);

function addPokemon() {
    const sprite = document.getElementById("pokemonSprite").src;

    const moves = [
        document.getElementById("moveSelect1").value,
        document.getElementById("moveSelect2").value,
        document.getElementById("moveSelect3").value,
        document.getElementById("moveSelect4").value
    ];


    const pokemonRow = document.createElement("div");
    pokemonRow.style.border = "2px solid black";
    pokemonRow.style.padding = "10px";
    pokemonRow.style.marginTop = "5px";
    pokemonRow.style.display = "flex";
    pokemonRow.style.backgroundColor = "white";

    const img = document.createElement("img");
    img.src = sprite;
    img.style.width = "80px";

    const moveList = document.createElement("ul");
    moves.forEach(move => {
        const li = document.createElement("li");
        li.textContent = move;
        moveList.appendChild(li);
    });

    pokemonRow.appendChild(img);
    pokemonRow.appendChild(moveList);

    document.getElementById("teamContainer").appendChild(pokemonRow);

}