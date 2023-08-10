const collection = document.getElementById("collection")
const collectons = document.getElementById("collections");
const collection_modal = document.getElementById("collection_modal");
const back = document.getElementById("back");

const add_collection = document.getElementById("add_collection");
const btn_add_collection = document.getElementById("btn_add_collection");
const save_add_collection = document.getElementById("save_add_collection")
const cancel_add_collection = document.getElementById("cancel_add_collection");
const collection_form_error = document.getElementById("collection_form_error");
const collection_form_success = document.getElementById("collection_form_success");

const add_lead = document.getElementById("add_lead");
const btn_add_lead = document.getElementById("btn_add_lead");
const save_add_lead = document.getElementById("save_add_lead")
const cancel_add_lead = document.getElementById("cancel_add_lead");
const lead_form_error = document.getElementById("lead_form_error");
const lead_form_success = document.getElementById("lead_form_success");

const new_collection_name = document.getElementById("new_collection_name");
const new_collection_description = document.getElementById("new_collection_description")

const new_lead_name = document.getElementById("new_lead_name");
const new_lead_contact = document.getElementById("new_lead_contact");
const new_lead_link = document.getElementById("new_lead_link");
const new_lead_description = document.getElementById("new_lead_description");

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
save_add_collection.addEventListener("click",function(){
    let name = new_collection_name.value;
    let description = new_collection_description.value;
    if(name===""){
        collection_form_error.style.display="block";
        setTimeout(function() {
            collection_form_error.style.display = "none";
         }, 3000);
    }
    else{
        alert(name +"\n"+ description);
        collection_form_success.style.display="block";
        clear_new_collection_input();
        setTimeout(function() {
            collection_form_success.style.display="none";
            add_collection.style.display="none";
            collectons.style.display="block";
         }, 1000);
    }
})


btn_add_lead.addEventListener("click",function(){
    collection_modal.style.display="none";
    add_lead.style.display="block";
})
cancel_add_lead.addEventListener("click",function(){
    add_lead.style.display="none";
    collection_modal.style.display="block";
})
save_add_lead.addEventListener("click",function(){
    let name = new_lead_name.value;
    let contact = new_lead_contact.value;
    let link = new_lead_link.value;
    let description = new_lead_description.value;
    if (name==="" || contact===""){
        lead_form_error.style.display="block";
        setTimeout(function() {
           lead_form_error.style.display = "none";
        }, 3000);
    }
    else{
        alert(name +"\n"+ contact);
        lead_form_success.style.display="block";
        clear_new_lead_input();
        setTimeout(function() {
            lead_form_success.style.display="none";
            add_lead.style.display="none";
            collection_modal.style.display="block";
         }, 1000);
    }
})

function clear_new_lead_input(){
    new_lead_name.value = "";
    new_lead_contact.value = "";
    new_lead_link.value = "";
    new_lead_description.value = "";
}
function clear_new_collection_input(){
    new_collection_name.value = "";
    new_collection_description.value = "";
}