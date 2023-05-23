
// ################## THEME CHANGER ####################
let themeToggler = document.querySelector('.theme-toggler');

themeToggler.onclick = () =>{

    themeToggler.classList.toggle('active');

    if(themeToggler.classList.contains('active')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

}