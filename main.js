const collection = document.getElementById("collection")
const collectons = document.getElementById("collections");
const collection_modal = document.getElementById("collection_modal");
const back = document.getElementById("back");
const add_collection = document.getElementById("add_collection");
const btn_add_collection = document.getElementById("btn_add_collection");
const cancel_add_collection = document.getElementById("cancel_add_collection");
const add_lead = document.getElementById("add_lead");
const btn_add_lead = document.getElementById("btn_add_lead");
const cancel_add_lead = document.getElementById("cancel_add_lead");

collection.addEventListener("click",function(){

    collectons.style.display="none";
    collection_modal.style.display="block";
})
back.addEventListener("click",function(){
    collection_modal.style.display="none";
    collectons.style.display="block";
})

btn_add_collection.addEventListener("click",function(){
    collectons.style.display="none";
    add_collection.style.display="block";
})

cancel_add_collection.addEventListener("click",function(){
    add_collection.style.display="none";
    collectons.style.display="block";
})

btn_add_lead.addEventListener("click",function(){
    collection_modal.style.display="none";
    add_lead.style.display="block";
})

cancel_add_lead.addEventListener("click",function(){
    add_lead.style.display="none";
    collection_modal.style.display="block";
})