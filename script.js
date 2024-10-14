const inputbox = document.getElementById("Input-box");
const listcontaier = document.getElementById("list-contaier");
function addtask()
{
    if(inputbox.value === ''){
       window.alert("Add your Tasks..!");
    }
    else{
        let tasks = document.createElement("li");   // li elements created
        tasks.textContent = inputbox.value;
        listcontaier.appendChild(tasks);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        tasks.appendChild(span);

    }
    inputbox.value = ""; 
    savedata();
   
}

listcontaier.addEventListener("click" , function(e)
{
      if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
       
      }
      else if(e.target.tagName==="SPAN")
        {
          e.target.parentElement.remove();
          savedata();
         
      }
},false);
function savedata()
{
    localStorage.setItem("data",listcontaier.innerHTML);
}
function showtaska()
{
    listcontaier.innerHTML= localStorage.getItem("data");
}

showtaska();