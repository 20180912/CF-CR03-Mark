/*Parse JSON*/
var team = JSON.parse(teamMembers);
var table = document.getElementById("table_content");

/*Fill the table with data from the JSON*/
for (var i = 0; i < team.length; i++) {
    table.innerHTML += `<tr>
        <td id="salesman${[i]}"></td>    
        <td>${team[i].name}</td>
        <td>${team[i].email}</td>
        <td id="personal_info${[i]}"></td>
    </tr>`

    /*Create image elements, fill and name them*/
    var image = document.createElement('img');
    image.src = team[i].image;
    image.className ="photo"
    document.getElementById(`salesman${[i]}`).appendChild(image);
}

var images = document.getElementsByClassName("photo");

for(let i = 0 ; i < images.length ; i++){
	images[i].addEventListener("click", function(){
    showDetails(i)}, false)
}

function showDetails(x){
    console.log(team[x].favorite_car);
    document.getElementById(`personal_info${[x]}`).innerHTML = `I have been working here for ${team[x].years_at_company} years and my favorite car is the ${team[x].favorite_car}`
}

for(let i = 0 ; i < images.length ; i++){
	images[i].addEventListener("dblclick", function(){
    hideDetails(i)}, false)
}

function hideDetails(x){
    console.log(team[x].favorite_car);
    document.getElementById(`personal_info${[x]}`).innerHTML = ``
}