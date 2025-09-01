function openModal(id){document.getElementById(id).style.display='block';}
function closeModal(id){document.getElementById(id).style.display='none';}
window.onclick=function(e){document.querySelectorAll('.modal').forEach(m=>{if(e.target===m)m.style.display='none';});}
function printCV(){document.body.classList.add("printing");window.print();document.body.classList.remove("printing");}