const button_view =document.getElementById("view_pic");
const button_remove =document.getElementById("remove_pic");

button_view.addEventListener("click",()=>{
    const div=document.getElementById("show_pic");
    const image=document.createElement("img");
    image.src="https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60";
    image.style="width:50%;"
    div.append(image);
});

button_remove.addEventListener("click",()=>{
    window.location.reload();
});



const button1= document.getElementById("clickable1");
const button2= document.getElementById("clickable2");
const textarea= document.getElementById("content");

button1.addEventListener("click",() =>{
    textarea.innerText="Hello Everyone";  
});

button2.addEventListener("click",() =>{
    textarea.innerText=""; 
});


const table=document.querySelector("table");

button1.addEventListener("click",() =>{
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    td1.innerText="1";
    const td2=document.createElement("td");
    td2.innerText="Sanjeet";
    const td3=document.createElement("td");
    td3.innerText="Male";
    tr.append(td1,td2,td3);
    table.append(tr);
});

button2.addEventListener("click",() =>{
    window.location.reload();
 });