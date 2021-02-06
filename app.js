import ToastContainer from "/toastMaker.js";

//LETS GO CLEAN CODE!!!!!!!!!!!!!!!!!!!!!!!


//var declaration
const toastContainer = new ToastContainer();
const toastButton = document.querySelectorAll("button");
let currentButton = null;
let currentToastType = null;
//const toastButton = document.getElementsByClassName("toastButton");
const textInput = document.querySelector("input");

//textInput.setAttribute('size', textInput.getAttribute('placeholder').length);

//event listenerss
toastButton.forEach(element => {
    element.addEventListener("click", event =>{
        updateToastReference(element);
        sendTextToToast(getReferenceButtonText());
    })
});

textInput.addEventListener("keydown", event =>{
    inputEventOnEnterKeyPress(event.key);
});

//core function
function updateToastReference(element){
    changeSelectedToast(element.dataset.type);
    changeSelectedButton(element);
}

function sendTextToToast(text) {

    if (isToastTypeNull() === false){
        selectToastFunction(text);
    }
}

function selectToastFunction(text){
    if (currentToastType === "ERROR"){
        toastContainer.errorToast(text);
    }
    else if (currentToastType === "INFO"){
        toastContainer.infoToast(text);
    }
    else if (currentToastType === "SUCCESS"){
        toastContainer.successToast(text);
    }
}

function inputEventOnEnterKeyPress(keyPress){
    if (keyPress === "Enter"){
        changeReferenceButtonText(textInput.value);
        textInput.blur();
        textInput.value = ""
    }
}

function changeReferenceButtonText(newReferenceText) {
    if (isSelectedButtonNull() == false){
        const toastTextRef = currentButton.querySelector(".toastTextRef");
        toastTextRef.textContent = newReferenceText;
    }
}

function getReferenceButtonText(){
    if (isSelectedButtonNull() == false) {
        const toastTextRef = currentButton.querySelector(".toastTextRef");
        return toastTextRef.textContent;
    }
    return null;
}


//selection function
function changeSelectedToast(selectedType){
    currentToastType = selectedType;
}

function changeSelectedButton(selectedButton){
    currentButton = selectedButton;
}


//null check functions
function isToastTypeNull(){
    if (currentToastType === null){
        return true;
    }
    return false;
}

function isSelectedButtonNull(){
    if (currentButton === null){
        return true;
    }
    return false;
}




