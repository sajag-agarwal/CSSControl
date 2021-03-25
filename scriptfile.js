"use strict";


function showToast() {
    let toast = document.getElementById("toast");
    toast.hidden = false;
    setTimeout(() => toast.hidden = true, 3000);
}

function closeAlertOnClick(id) {
    let ele = document.getElementById(id);
    let parent = ele.parentNode;
    parent.style.display = 'none';
}
function closeModalOnClick(id) {
    let parent = document.getElementById(id);
    let child = (parent.querySelectorAll('.modal'))[0];
    parent.style.display = 'none';
    child.style.display = 'none';
}
function showModalOnClick(id) {
    let parent = document.getElementById(id);
    let child = (parent.querySelectorAll('.modal'))[0];
    parent.style.display = 'block';
    child.style.display = 'grid';
}

function heartclick(){
    let heart = document.getElementById("heart");
    let heartlist = heart.classList.value.split(" ");
    if(heartlist.includes("active") == false){
        heart.classList.add("active");
    }
    else{
        heart.classList.remove("active");
    }
}

function burgerClick(){
    let parent = document.getElementsByClassName("navigation-container")[0];
    let classlist = parent.classList.value.split(" ");
    if(classlist.includes("mobile") == false){
        parent.classList.add("mobile");
    }
    else{
        parent.classList.remove("mobile");
    }
}

function likeclick(id){
    let like = document.getElementById(id);
    let sibling = like.parentNode.childNodes[1];
    let starlist;
    while (sibling!==like) {
        starlist = sibling.classList.value.split(" ");
        if (starlist.includes("active") == false) {
            sibling.classList.add("active");
        }
        sibling = sibling.nextSibling.nextSibling;
    }
    starlist = like.classList.value.split(" ");
    if (starlist.includes("active") == false) {
        sibling.classList.add("active");
    }
    sibling = sibling.nextSibling.nextSibling;
    while (sibling !== null) {
        starlist = sibling.classList.value.split(" ");
        if (starlist.includes("active") == true) {
            sibling.classList.remove("active");
        }
        else{
            break;
        }
        sibling = sibling.nextSibling.nextSibling;
    }

}