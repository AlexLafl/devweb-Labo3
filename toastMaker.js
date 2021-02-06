const TOAST_TYPES = {
    ERROR : "ERROR",
    INFO : "INFO",
    SUCCESS : "SUCCESS"
}

const TIMEOUT_TIME = 4000;


export default class ToastContainer {

    constructor(){
        const toastContainer = document.createElement("div");
        console.log(toastContainer);
        toastContainer.className = "toastContainer";
        document.body.appendChild(toastContainer);

        this.toastContainer = toastContainer;
    }
    


    infoToast(text){
        this.manageToast(text, TOAST_TYPES.INFO);
    }
    errorToast(text){
        this.manageToast(text, TOAST_TYPES.ERROR);
    }

    successToast(text){
        this.manageToast(text, TOAST_TYPES.SUCCESS);
    }

    manageToast(text, type){
        const toastElement = this.createToast(text, type).element;
        this.appendToast(toastElement);
        this.setTimeoutAndRemove(TIMEOUT_TIME, toastElement);
    }

    createToast(text, type){
        return new Toast(text, type);
    }

    appendToast(toastElement){
        this.toastContainer.appendChild(toastElement);
    }

    removeToast(toastElement) {
        toastElement.remove()
    }

    setTimeoutAndRemove(time, toastElement){
        window.setTimeout(() => {
            this.removeToast(toastElement);
        }, time)
    }
}

class Toast {
    constructor(text, type){
        const toastElement = document.createElement("div");
        const toastText = document.createElement("p");
        this.text, toastElement.textContent = text;
        toastElement.className = `toastElement ${type.toLowerCase()}`;
        toastElement.appendChild(toastText);

        this.type = type;
        this.element = toastElement;
    }
}