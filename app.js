

alert(' Hi User !!! ')


alert(' Error! Please Enter A Valid Password ')


alert(' Welcome To JS Land.... \n Happy Coding! ')


alert(" Hello I can run JS through my web browser's console ")


// < html >

//     <head> 
//         {/* Head */}
//         <script>alert(' Hi User !!! ')</script>
//     </head>
    
//     {/* Body (before your page’s HTML)  */}
//     <script>alert(' Hi User !!! ')</script>
    
//     <body>
    
//     {/* Body (inside your page’s HTML) */}
//     <script>alert(' Hi User !!! ')</script>

//     <h1> Hello World With JavaScript </h1>
        
//     {/* Body (after your page’s HTML)     */}
//     <script>alert(' Hi User !!! ')</script>  
    
//     </body>

// </html>

var FirstName = 'Muhammad';
var LastName = 'Anas'
var FullName = FirstName + LastName;

var message = 'Hello World'
alert(message)

var StuName = 'Jhon Doe'
var StuAge = '15 years old'
var StuCourse = 'Certified Mobile Application Development'
alert(StuName)
alert(StuAge)
alert(StuCourse)

var Pizza = ' PIZZA \n PIZZ \n PIZ \n PI \n P '
alert(Pizza)

var myEmail= 'm.anasseth00@gmail.com'
alert('my email address is '+ email)

var book = 'A Smarter Way To Learn JavaScript'
alert('I am Trying to learn from the book '+ book )

document.getElementsByTagName('body')[0].innerHTML = '<h1>Yah ! I can write HTML content through JavaScript</h1>'


var myage = 'I am 15 years old'
alert(myage)

var visitorsNumber = 14 
alert('you have visited this site '+visitorsNumber+' times.')

var birthYear = 1990;
alert('My Birth Year is '+birthYear+'\n Data type of my birth year is number') 

var vizName = 'John Doe'
var vizProduct = 'T-Shirts'
var vizQuantity = 5
alert(vizName+' ordered '+vizQuantity+' '+vizProduct+'(s) on XYZ Clothing Store')




var a=1, b=2,c=3 ;

// var 1stNumber= 'Error !! Illegal Variable Name';
// var .iop = 'Error !! Illegal Variable Name';
// var -ofdfo= 'Error !! Illegal Variable Name';
// var @ffjdfsd = 'Error !! Illegal Variable Name';
// var %$#@* = 'Error !! Illegal Variable Name';

var a1stNumber = 'Super !! legal Variable Name'
var iop = 'Super !! legal Variable Name';
var _ofdfo ='Super !! legal Variable Name';
var ffjdsd = 'Super !! legal Variable Name';
var $OnlyDollarSignAllowed = 'Super !! legal Variable Name';

var rulesForNamingJavascriptVariable = '<h2>Rules for naming JS variables</h2> <br /> <p> Variable names can only contain numbers, $ and __ .</p> <br /> <p> Variables must begin with a dollar sign $ , underscore or letter . For example $name, _name or name</p> <br /> <p>  Variable names are case-Sensitive</p> <br /> <p>Variable names should not be JS KeyWords</p> '
document.getElementsByTagName('body')[0].innerHTML = rulesForNamingJavascriptVariable



var addition = 5+3;
var division = 5/3;
var subraction = 5-3;
var modulusOperator = 5%3;
var multiplication=5*3;
alert('Sum Of 5 and 3 is '+addition)
alert('Subraction Of 5 and 3 is '+subraction)
alert('Multiplication Of 5 and 3 is '+multiplication)
alert('Division Of 5 and 3 is '+division)
alert('Modulus Of 5 and 3 is '+modulusOperator)


var JSfun ;
document.getElementById('div1').innerHTML = '“Value after variable declaration is : '+JSfun+' ."'
JSfun = 5;
document.getElementById('div1').innerHTML += ' “Initial value:'+JSfun+ '."'
JSfun++
document.getElementById('div1').innerHTML += ' "Value after increment is:'+JSfun+'."'
JSfun = JSfun + 7
document.getElementById('div1').innerHTML += ' " Value after addition is: '+JSfun+'."' 
JSfun--
document.getElementById('div1').innerHTML += ' “Value after decrement is: '+JSfun+'."'
JSfun = JSfun%3;
document.getElementById('div1').innerHTML += '  “The remainder is : '+JSfun+'."'

var tickets = 600;
var totalCost = tickets*5
document.getElementById('div1').innerHTML = '<h1>Total Cost To Buy 5 Tickets To a Movie is'+totalCost+'</h1>'

var number=4;
var ans;
for (var i = 1; i<11 ; i++){
    ans = number * i ;
    document.getElementById('div1').innerHTML += '<h2>4 x '+i+' = '+ans+'</h2>'
}

