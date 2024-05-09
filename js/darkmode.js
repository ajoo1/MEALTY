const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body,navbar,navlinks,navlogo,trianglea,triangle,menubtn,menu_items,marawanbtn');
let gall3 = document.getElementById('gall3');
let root = document.documentElement;
let root_val = document.querySelector(':root');
let card = document.getElementById('card');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let eslam_h2 =document.getElementById('eslam-h2');
let subs = document.getElementById('subs-btn');
let icon = document.getElementById('e-map');
let icon1 = document.getElementById('e-map1');
let icon2 = document.getElementById('e-map2');
let icon11 = document.getElementById('icon11');
let icon22 = document.getElementById('icon22');
let icon3 = document.getElementById('icon3');
let icon4 = document.getElementById('icon4');
let formbtn = document.getElementById('formbtn');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition='0.1s';
        navbar.style.background = 'white';
        navbar.style.color = 'black';
        navbar.style.transition = '0.1s';
        navlinks.style.color = 'black';
        navlinks.style.transition = '0.1s';
        navlogo.style.color = 'black';
        navlogo.style.transition = '0.1s';
        trianglea.style.color = 'black';
        triangle.style.borderLeft = "100px solid #ce1212"
        menubtn.style.color = 'black';
        menu_items.style.background = '#00000080';
        marawanbtn.style.background = '#ce1212';
        gall3.style.color='#ce1212';
        card.style.background='white';
        card1.style.background='white';
        card2.style.background='white';
        card.style.color='black';
        card1.style.color='black';
        card2.style.color='black';
        eslam_h2.style.color='#ce1212';
        subs.style.background='#ce1212';
        icon.style.color='#ce1212';
        icon1.style.color='#ce1212';
        icon2.style.color='#ce1212';
        icon11.style.background ='#ce1212';
        icon22.style.background ='#ce1212';
        icon3.style.background ='#ce1212';
        icon4.style.background ='#ce1212';
        formbtn.style.background ='#ce1212';
       

    }
    else{
        
        body.style.background = '#252525';
        body.style.transition='0.1s';
        navbar.style.background = '#222222e1';
        navbar.style.color = 'white';
        body.style.color = 'white';
        body.style.transition = '0.1s';
        navlinks.style.color = 'white';
        navlinks.style.transition = '0.1s';
        navlogo.style.color = 'white';
        navlogo.style.transition = 'white';
        trianglea.style.color = 'white';
        triangle.style.borderLeft = "100px solid #ffa600"
        menubtn.style.color = 'white';
        menu_items.style.background ='#00000080';
        marawanbtn.style.background = '#ffa600';
        gall3.style.color='#ffa600';
        card.style.background='#222222e1';
        card1.style.background='#222222e1';
        card2.style.background='#222222e1';
        card.style.color='white';
        card1.style.color='white';
        card2.style.color='white';
        eslam_h2.style.color='#ffa600';
        subs.style.background='#ffa600';
        icon.style.color='#ffa600';
        icon1.style.color='#ffa600';
        icon2.style.color='#ffa600';
        icon11.style.background ='#ffa600';
        icon22.style.background ='#ffa600';
        icon3.style.background ='#ffa600';
        icon4.style.background ='#ffa600';
        formbtn.style.background ='#ffa600';



        





        

     
    }
});
