const openBtn =document.querySelector(".open-btn");
const modalContent =document.querySelector(".modal-content");
const closeBtn =document.querySelector(".close-btn");

openBtn.addEventListener('click',()=>{
    modalContent.classList.add("open-modal")
});

closeBtn.addEventListener('click',()=>{
    modalContent.classList.remove("open-modal")
});
