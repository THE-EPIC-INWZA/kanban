const but = document.getElementById('button');

but.addEventListener('click',but1);

const Pcard = (card) =>{
    const lane = document.querySelectorAll(".lane")
    const spawnlane = 0;
    lane[spawnlane].appendChild(card)
}


const ccard = (index) =>{
    const cardE = document.createElement("div");
    cardE.className = "card";
    cardE.innerText = `${index}`;
    cardE.draggable = 'true'
    
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "ลบ";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
        cardE.remove();
    });

    cardE.appendChild(deleteButton);

    cardE.addEventListener("dragstart",(e)=>{
        e.target.id = "dragged"
    })

    cardE.addEventListener("dragend", (e)=>{
        e.target.id = "undefined"
    })

    Pcard(cardE);
}

const cards = () =>{
    
        let input = prompt("ใส่ TEXT")
        ccard(input)
  
}


addEventListenerTolane = () =>{
    const lane = document.querySelectorAll(".lane")
    for (let i =0 ; i <lane.length ; i++){
        lane[i].addEventListener("dragover",(e)=>{
            e.preventDefault();
        })

        lane[i].addEventListener("drop", (e)=>{
            e.preventDefault()

            const draged = document.querySelector('#dragged')
            draged.parentNode.removeChild(draged)
            e.currentTarget.appendChild(draged)
        })
    }
}
function but1(){
    cards();
}


addEventListenerTolane()