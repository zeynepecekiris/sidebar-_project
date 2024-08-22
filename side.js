const bars = document.querySelector('.fa-bars');
const sidebars = document.querySelector('.sidebars');

bars.addEventListener('click' , () => {

    sidebars.classList.toggle('showSidebar');
});
