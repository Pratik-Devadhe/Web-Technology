let searchbar = document.getElementById("searchbar");

const current = document.getElementById("current");
const complete = document.getElementById("Completed");


   
function addtask(){
    if(searchbar.value === ""){
        alert("Please Enter the task");
        return;
    }else{

        // create a currtask element
        const currtask = document.createElement("div");
        currtask.className = 'currtask';


        // h2 heading to add task in it.
        const h2 = document.createElement("h2");
        h2.innerHTML = searchbar.value;

        // button to remove it;
        const btn = document.createElement("button");
        btn.className = 'btn1';
        btn.innerHTML = 'X';
        btn.onclick = () => {
            addToComplted(h2);
            currtask.remove(); // remove from current list
        };

        // add h2 and btn to cuutask

        currtask.appendChild(h2);
        currtask.appendChild(btn);

        current.appendChild(currtask);

        searchbar.value = "";
    }
}

function addToComplted(text){

    // create completed class list;

    const completetask = document.createElement("div");
    completetask.className = 'comptask';

    // h2 heading
    const h2 = document.createElement("h2");
    h2.innerHTML = text.innerHTML;

    //h2.innerHTML =
    const btn = document.createElement('button');
    btn.className = 'btn1';
     btn.innerHTML = 'X';
    completetask.appendChild(h2);
    completetask.appendChild(btn);

    complete.appendChild(completetask);

    btn.onclick = () => completetask.remove();  
}