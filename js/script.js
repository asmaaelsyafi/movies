let rowBody =document.getElementById('rowBody')


// ----------------------------sidebar-----------------------------------------

$('#open .icon').click(function(){
    let barWidth =$('.bar').outerWidth();
    let optionsLeft =$('#sidebar').offset().left; //get left of sidebar
    openNav()

    if(optionsLeft === 0){
        $('#sidebar').css({left:`-${barWidth}px`,transition:'left 1s'})
        $('#open .open').removeClass('d-none')
        $('#open .open').addClass('d-block') 
        $('#open .close').removeClass('d-block')
        $('#open .close').addClass('d-none')
        
        
        
    }
    else{
        $('#sidebar').css({left:`0px`,transition:'left 1s'})
        $('.options a').addClass('animate__rubberBand')
        $('.options a').removeClass('aanimate__bounceOut') 
        $('#open .close').removeClass('d-none')
        $('#open .close').addClass('d-block')  
    }
})


function openNav(){
    $('#open .open').removeClass('d-block')
    $('#open .open').addClass('d-none')     
    $('.options a').addClass('animate__rubberBand')
    $('.options a').removeClass('aanimate__bounceOut') 
    $('#open .close').removeClass('d-none')
    $('#open .close').addClass('d-block')  

}

function closeNav(){
    $('.options a').addClass('aanimate__bounceOut')
    $('.options a').removeClass('animate__rubberBand')
   
    $('#open .open').removeClass('d-none')
    $('#open .open').addClass('d-block') 
    $('#open .close').removeClass('d-block')
    $('#open .close').addClass('d-none')

}



// ---------------------------- onClick -----------------------------------------
let navLink=document.querySelectorAll('.navLink')

for(let i=0; i<navLink.length;i++){
    navLink[i].addEventListener('click',function(e){
        console.log(e.target.innerText)
        let movie =e.target.innerText
        getMovie(movie)
        
    })
    
}
async function getMovie(movie){

    const options = {
        method: 'GET', 
        headers: {accept: 'application/json'}
    };


    const api = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    let response = await api.json()
    let movieList=response;
    console.log(movieList)
    display(movieList)
}


// ---------------------------- body -----------------------------------------

async function getData(){
    const api = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let response = await api.json()
    let results =  response.results;
    console.log(results);
    display(results);
}
getData();

function display(arr){
    let content =` `;
    for(let i=0 ;i<arr.length; i++){
        content +=`<div class="col-lg-4 col-md-6 col-sm-12">
                <div id="inner" onmouseover="hover(${arr[i].id})" onmouseleave="delHover(${arr[i].id})" class="inner rounded ">
                    <img class="w-100" src="./image/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg">
                    <div class="layer" id="layer">
                        <h1 class="h2 text-center mt-2 p-3  animate__animated animate__slideInDown ">
                            ${arr[i].original_title}
                        </h1>
                        <p class=" ps-3 animate__animated animate__flipInX "> ${arr[i].overview.substring(0,100)}</p>
                        <p class=" ps-3 animate__animated animate__fadeInUp"> ${arr[i].release_date} </p>
                        <p class=" ps-3 animate__animated animate__fadeInUp">  ${arr[i].title} </p>
                        <div
                            class=" circle animate__animated animate__fadeInUp rounded-circle mt-2 ms-3 vote d-flex justify-content-center align-items-center">
                            <span> ${arr[i].vote_average.toString().substring(0,3)}</span>
                        </div>
                    </div>
                </div>
            </div> 
            `
    }
    rowBody.innerHTML=content;

}


function search(){
    
}
// ----------------------------------------ReGex----------------------------------------


let userName = document.getElementById('name')
let userEmail = document.getElementById('email')
let userPhone = document.getElementById('phone')
let userAge = document.getElementById('age')
let userPassword = document.getElementById('password')
let rePassword = document.getElementById('rePassword')
//-------check--------
let checkName = document.getElementById('checkName')
let checkEmail = document.getElementById('checkEmail')
let checkPhone = document.getElementById('checkPhone')
let checkAge = document.getElementById('checkAge')
let checkPassword = document.getElementById('checkPassword')
let checkRepassword = document.getElementById('checkRePassword')


//Name ReGex--------------------------------------
let nameReg =/^[a-zA-Z ]{1,37}$/;
userName.addEventListener('input',function(){
    let name = userName.value;
    console.log(name)
    
    if(nameReg.test(name) ==true || name === "" ){
        console.log("match")
        checkName.classList.add('d-none')


    } else if(userName.value == ""){

        checkname.classList.remove('d-block')
        checkname.classList.add('d-none')
    }
    else{
        console.log("nomatch")
        checkName.classList.add('d-block')
        checkName.classList.remove('d-none')
    }

})


//Email ReGex---------------------------------------
let emailReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
userEmail.addEventListener('input',function(){
    let email =userEmail.value;
    console.log(email)

    if(emailReg.test(email)==true){
        checkEmail.classList.add('d-none')
    }
    else if(userEmail.value == ""){

        checkEmail.classList.remove('d-block')
        checkEmail.classList.add('d-none')
    }
    else{
        console.log("nomatch")
        checkEmail.classList.add('d-block')
        checkEmail.classList.remove('d-none')
    }
   
})

//Phone ReGex----------------------------------------
let  phoneReg =/[002|\+2]?01[1250][0-9]{8}$/;
userPhone.addEventListener('input',function(){
    let phone =userPhone.value;
    
    if(phoneReg.test(phone)==true){
        checkPhone.classList.add('d-none')
    }
    else if(userPhone.value == ""){

        checkPhone.classList.remove('d-block')
        checkPhone.classList.add('d-none')
    }
    else{
        checkPhone.classList.add('d-block')
        checkPhone.classList.remove('d-none')
    }
})

//Age ReGex---------------------------------------
userAge.addEventListener('input',function(){
    let age =userAge.value;

    if(age >=16 && age<100 ){
        checkAge.classList.add('d-none')
    }
    else if(userAge.value == ""){
        checkAge.classList.remove('d-block')
        checkAge.classList.add('d-none')
    }
    else{
        checkAge.classList.add('d-block')
        checkAge.classList.remove('d-none')
    }
})


//password ReGex---------------------------------------

let  passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/

userPassword.addEventListener('input',function(){
    let password =userPassword.value;

    if(passwordReg.test(password)== true ){
        checkPassword.classList.add('d-none')
    }
    else if(password == ""){
        checkPassword.classList.remove('d-block')
        checkPassword.classList.add('d-none')
    }
    else{ 
        checkPassword.classList.add('d-block')
        checkPassword.classList.remove('d-none')
    }
    
})


//Repassword ReGex---------------------------------------
rePassword.addEventListener('input',function(){
    let repass = rePassword.value;
    

    if(userPassword.value === repass){
        checkRepassword.classList.add('d-none')
    }
    else if(repass == ""){
        checkRepassword.classList.remove('d-block')
        checkRepassword.classList.add('d-none')
    }
    else{
        checkRepassword.classList.add('d-block')
        checkRepassword.classList.remove('d-none')
    }


})
// ------------------------btn up----------------------------------
$(window).scroll(function(){
    let top=$(window).scrollTop()//get top
    console.log(top) 
    if(top === 0){
        $('#btn-up').fadeOut(1000) 
    }
    else if(top > 1 ){
        $('#btn-up').fadeIn(1000)
    }
    else{
        $('#btn-up').fadeOut(1000)
    }
    })

    $('#btn-up').click(function(){
        $('html,body').animate({
        scrollTop:0
        },4000);
        

    })

    // ------------------------------------------------------
    let layer =document.getElementById('layer')
    let inner =document.getElementById('inner')


    // inner.addEventListener('onmouseover',function(){
        
    // })

    function hover(e){
        console.log(e)
        $('.layer').css({visibility: 'visible'})
        $('.layer h1').css({opacity: '1'})
        $('.layer h1 ').addClass('animate__slideInDown')
        $('.layer h1 ').removeClass('animate__bounceOutLeft')
        $('.layer p ').addClass('animate__flipInX animate__fadeInUp')
        $('.layer p ').removeClass('animate__bounceOutLeft')
        $('.layer .circle ').addClass('animate__fadeInUp')
        $('.circle ').removeClass('animate__bounceOutLeft')
        
        
        
    }

function delHover(id){
    console.log(id)
    $('.layer h1 ').removeClass('animate__slideInDown')
    $('.layer h1 ').addClass('animate__bounceOutLeft')
    $('.layer p ').removeClass('animate__flipInX animate__fadeInUp')
    $('.layer p ').addClass('animate__bounceOutLeft')
    $('.layer .circle ').removeClass('animate__fadeInUp')
    $('.circle ').addClass('animate__bounceOutLeft')
    $('.layer').css({visibility: 'hidden'})
    $('.layer h1').css({opacity: '0'})
}
