const shareBtn = document.querySelector(".card_content_button")
const socialIcons = document.querySelector(".card_content_social-icons") 

shareBtn.addEventListener('click',()=>{
    socialIcons.classList.toggle('show')
})