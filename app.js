
var name=prompt('Enter your name');
var gender=prompt('Enter your gender(male or female)');
var age=prompt('Enter your age');
if (age <=0){
 alert('wrong age , plz reEnter the age') ;
}
if (!(confirm('Do you want to skip the welcoming message?')))
{
if
(gender=='male ' || gender==' Male' )
alert('Welcome MR '+ name + ' Here');
else if (gender=='female' || gender=='Female')
alert('Welcome MRS ' + name + ' Here');

else
 alert('Welcome ' + name +  ' Here' );
}
