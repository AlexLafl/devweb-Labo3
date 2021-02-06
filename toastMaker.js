const TOAST_TYPES = {
    ERROR : "ERROR",
    INFO : "INFO",
    SUCCESS : "SUCCESS"
}


export default class Toast {

    constructor(){
        //créer un contenant pour les notifs
        const container = document.createElement("div");
        container.className = "toast-container";
    }
    


    //créer des méthodes pour chacun des types de notifs
    /*info(text, TOAST_TYPES.INFO){

    }
    error(text, TOAST_TYPES.ERROR){

    }

    success(text, TOAST_TYPES.SUCCESS){

    }

    toast(text, type){

    }*/
}