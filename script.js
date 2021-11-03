let input = document.getElementById("word")
let button = document.getElementById("button")
let even = document.getElementById("even")
let odd = document.getElementById("odd")
let usersWord = ""

input.addEventListener("keyup", (event)=>{
   console.log(event.target.value)
   return (usersWord = event.target.value)
})
console.log(usersWord)

button.addEventListener("click", (event)=>{
    let newListItem = document.createElement('LI')
    newListItem.innerText = usersWord
    if(usersWord.length%2===0){
        return (even.appendChild(newListItem))
    } else {
       return (odd.appendChild(newListItem)) 
    }
    console.log("click;", usersWord)
   
} )




// function handleSubmit() {
//     let newListItem = document.createElement('LI')
//     newListItem.innerText = usersWord

//     oddList.appendChild(newListItem)
//   }



