const but = document.getElementById('button');

but.addEventListener('click',but1);



const pasteCard = (card) => {
    const swimlanes = document.querySelectorAll('.swimlane');
    const randomSwimlanes = 0;
    swimlanes[randomSwimlanes].appendChild(card);
}
const createCard = (index) =>{
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerText = `${index}`;
    cardElement.draggable = 'true';

    cardElement.addEventListener('dragstart', (e)=>{
        e.target.id = 'dragged';
    });

    cardElement.addEventListener('dragend', (e)=>{
        e.target.id = 'undefined';
    });

    pasteCard(cardElement);
}

const createCards = (amount) =>{
    for(let i = 0; i < amount; i++){
        let input = prompt("ใส่ TEXT");
        createCard(input);
    }
}

addEventListenerToSwimlanes = () =>{
    const swimlanes = document.querySelectorAll('.swimlane');
    for (let i=0; i < swimlanes.length; i++){
        swimlanes[i].addEventListener('dragover', (e) =>{
            e.preventDefault();
        });

        swimlanes[i].addEventListener('drop', (e) =>{
            e.preventDefault();

            const dragedCared = document.querySelector('#dragged');
            dragedCared.parentNode.removeChild(dragedCared);
            e.currentTarget.appendChild(dragedCared);
        });
    }
}

function but1(){
    createCards(1);
}

addEventListenerTolane()