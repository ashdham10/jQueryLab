//$('body').append('<button></button>');

//$('button').addClass('myButton');
//$('.myButton').text('Click Me');

//$('.myButton').on('click', function(){
   // alert('Hello!');
//});

$('#textButton').on('click', function(){
    let x = document.getElementById('myText').value;
    alert(x);

})

$('#myDiv').on('mouseover', function(){
    $('#myDiv').css('background','red');
})
$('#myDiv').on('mouseout', function(){
    $('#myDiv').css('background', '');
})

$('body').append(`<p>${'Hello World'}</p>`);
$('p').on('click', function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var textColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(textColor);
   $('p').css('color', textColor);
   
})

//$('body').append('<button>');
//$('body').append('<span>');
//$('button').text('Click for Name');
//$('button').on('click', function(){
 //   $('span').append('My Name ');
//})


$('#friendsButton').on('click', function(){
    let friends = [
        'Jess', 'Kayla', 'Amanda', 
        'Felesha', 'Jordin', 'Tim',
        'Taylor', 'Mindy', 'Kelsie', 'Rachel'
    ];
    friends.forEach(function(friend){
        $('ul').append(`<li>${friend}</li>`);
    })
})
