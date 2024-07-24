let random_number = Math.floor(Math.random(1 - 9) * 10) + 1;
console.log(random_number)

if (random_number == 10){
    location.reload()
}

function onClickCheck() {
    let box_id = event.target.id
    if (box_id == random_number){
        alert("You Lost!!! Accidently Clicked the bomb x_x")
         const selectedElm = document.getElementById(box_id)
        selectedElm.style.backgroundColor = "red"
        location.reload()
    }
    else {
        console.log("You doing great!!! keep clicking")
        const selectedElm = document.getElementById(box_id)
        selectedElm.style.backgroundColor = "green"
    }
}

