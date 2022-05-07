function btnColorChange(){
    let btn = document.querySelector("#submit_btn_color_change") ;
    btn.innerHTML = "Submitted"
    btn.style.backgroundColor = "red" ;
    btn.style.color = "white";
    btn.style.width = "7rem" ;
}

const image_change = [
    {
        id : 0 ,
        image : "Images/main_page_image.webp" , 
    },
    {
        id : 1 ,
        image : "Images/main-img-1.jpeg" , 
    },
    {
        id : 2 ,
        image : "Images/main-img-2.jpeg" , 
    },
    {
        id : 3 ,
        image : "Images/main-img-3.jpg" , 
    }
];

const img = document.querySelector("#main-page-fire-img") ;
const prev = document.querySelector("#prev") ;
const next = document.querySelector("#next") ;

let current = 0 ;

function change_main_image(current){
    img.src = image_change[current].image ;
}

prev.addEventListener('click', () =>{
    current-- ; 
    if(current < 0){
        current = image_change.length - 1 ;
    }
    change_main_image(current) ;
});

next.addEventListener('click',() =>{
    current++ ;
    if(current >= image_change.length){
        current = 0 ;
    }
    change_main_image(current) ;
});

