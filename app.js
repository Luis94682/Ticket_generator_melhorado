// inputs
const imageInput = document.getElementById("image-input")
const nameInput = document.getElementById("name-input")
const emailInput = document.getElementById("email-input")
const usernameInput = document.getElementById("github-username-input")

//other stuff
const generateBtn = document.getElementById("generate-btn")
const delImgBtn = document.getElementById("del-img-btn")
const chnageImgBtn = document.getElementById("chnage-img-btn")
const editBtns = document.querySelector(".img-edit-btn-container")

const inputImgPreview = document.getElementById("preview-img")
const imageUploadSection = document.querySelector(".create-section")

//input array
const inputs = [imageInput, nameInput, emailInput, usernameInput];
console.log(inputs)

// outputs
const dateTime = document.getElementById("date-time")
const ticketProfileImg = document.getElementById("profile-img-output")
const nameEl = document.getElementById("username-el")
const githubUsernameEl = document.getElementById("github-username-el")
const ticketIdEl = document.getElementById("ticket-id")
const title = document.getElementById("titleEl")
const subTitle = document.getElementById("subTitleEl")


//elements
const ticket = document.querySelector(".ticket-section")

// views/screens
const createTicketView = document.querySelector(".create-ticket-section")
const ticketView = document.querySelector(".ticket-section")

let results = []


//image preview chnager
imageInput.addEventListener("change", function() {
    if(imageInput.files[0]) {
        inputImgPreview.src = URL.createObjectURL(imageInput.files[0]);
        editBtns.style.display = "flex"
    }
})


generateBtn.addEventListener("click", function() {
    results = []
    let isAllFilled = true


    // input grabber thingy
    for (let input of inputs){
        if (input.value === ""){
            results.push({
                isEmpty: true,
                id:input.id
            })
        }
        else {
            results.push({
                isEmpty: false,
                id:input.id
            })
        }
    }

    // check if all are filled -_-
    for(i = 0; i < results.length; i++){

        if (results[i].isEmpty){
            isAllFilled = false
        }

    }
    if (isAllFilled === true){
        generateTicket()
        }

    else{
        playAnimation()
        // identify which ones input boxes are empty and inidcate them :p
        for(i = 0; i < results.length; i++) {
            const currentEl = document.getElementById(results[i].id)
            
            if(results[i].isEmpty){
                currentEl.style.outline = "2px solid var(--Neutral-500)";
            }
            else{
                currentEl.style.borderColor = "var(--green)"
                currentEl.style.outline = "none"
            }


            // image input checker
            if( results[i].id === "image-input"){
                if(!imageInput.files[0]){
                    imageUploadSection.style.borderColor = "var(--red)"
                }
                else{
                    imageUploadSection.style.borderColor = "var(--green)"
                }
            }
        }
    }    
})

// ticket generator
function generateTicket() {
    fadeInAnimation()
    ticketView.style.display = "flex"
    createTicketView.style.display = "none"

    // value setting
    ticketProfileImg.src = URL.createObjectURL(imageInput.files[0])
    nameEl.textContent = nameInput.value
    githubUsernameEl.textContent = "@" + usernameInput.value
    ticketIdEl.textContent = "#" + generateId()

    title.innerHTML = `Congrats, <span>${nameInput.value}!</span> Your ticket is ready.`
    subTitle.innerHTML = `We've emailed your ticket to <br> <span>${emailInput.value}</span> and will send updates in the run up to the event.`

    //set date
    dateTime.textContent = getDate()
}


// id generator
function generateId() {
    let idNum = ""
    let idLen = 7

    for(i = 0; i < idLen; i++){
        idNum += Math.floor(Math.random()*10)
    }
    return idNum
}

// animation stuff

function playAnimation() {
    generateBtn.classList.add("play-animation")

    setTimeout(function() {
        generateBtn.classList.remove("play-animation")
    },2000)
}

function fadeInAnimation() {
    ticket.classList.add("fadein")

    setTimeout(function() {
        ticket.classList.remove("fadein")
    },5000)
}

//remove img
delImgBtn.addEventListener("click", function() {
    imageInput.value = ""
    inputImgPreview.src = "icons/icon-upload.svg"
    editBtns.style.display = "none"
})


// date grabber
const now = new Date()
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function getDate() {
    let month = months[now.getMonth()]
    return `${month} ${now.getDay()} ${now.getFullYear()}, Austin/TX`
}
