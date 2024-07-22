let btn = document.querySelector(".add")
let input = document.querySelector("input");
let selectall = document.querySelector("#selectall")
let list_container = document.querySelector(".list-container");
let ul = document.querySelector("ul")
let removeall = document.querySelector(".rall")
let task_count = 0
let x = document.querySelector("#removediv")
// let li = document.querySelectorAll("li")   
btn.addEventListener("click", addTask);
console.log(task_count)

function addTask() {
    if (input.value != '') {
  
        x.style.visibility = "visible";
        let li = document.createElement("li");
        li.setAttribute("class","li-settings")
        let checkdivcontainer = document.createElement("div");
        let checkdiv = document.createElement("input");
        checkdiv.setAttribute("type", "checkbox");
        checkdivcontainer.setAttribute("class", "divcheckcontainer")
        let task = document.createElement('p');
        task.setAttribute("class","taskstyle")
        task.innerText = input.value;
        input.value = ''
        let removebtn = document.createElement('button')
        removebtn.innerText = "clear"
        removebtn.style.color = "red"
        removebtn.style.width = "4rem"
        removebtn.style.height = "2rem"
        checkdivcontainer.append(checkdiv);

        li.append(checkdivcontainer);
        li.append(task);
        li.append(removebtn)
        ul.append(li);
    }
}
ul.addEventListener("click",function(event){
    event.stopPropagation()
    if(event.target.nodeName == "BUTTON"){
        let task = event.target.parentElement;
        task.remove();
    }
})
document.querySelector("#sid").addEventListener("change",function(event) {
    let alltasks = document.querySelectorAll(".li-settings input[type='checkbox']");
    alltasks.forEach(ele=>{
        ele.checked = this.checked
    })
    console.log(event.target.checked)
})
removeall.addEventListener("click",function(){
    if(document.querySelector("#sid").checked == true){
        let alltask = document.querySelectorAll(".li-settings");
        alltask.forEach(ele =>{
            ele.remove()
        })
          document.querySelector("#sid").checked = false;
    x.style.visibility = "hidden"
    }
  
})
