// this is 
$(document).ready(function(){
    let bottom =$('.bottom')
    bottom.css('background','red')
    console.log()

})

$('.bottom').on('click',function (){
    console.log('you have clicked the bottom dive')
})

let mainbody =  $('#mainbody');
mainbody.click(function (){
    $('#main').append('<p>this is latter happend</p>');
})

console.log(mainbody);