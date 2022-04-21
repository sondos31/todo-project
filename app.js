
var name=prompt('Enter your name');
var gender=prompt('Enter your gender(male or female)');
var age=prompt('Enter your age');
let answers=[];
if (age <=0){
 alert('wrong age , plz reEnter the age') ;}

if (!(confirm('Do you want to skip the welcoming message?')))
{
if
(gender== 'male' || gender=='Male' )
alert('Welcome MR '+ name + ' Here');
else if (gender=='female' || gender=='Female')
alert('Welcome MRS ' + name + ' Here');
else
 alert('Welcome ' + name +  ' Here' );

}
addAnswers( prompt('Do you want to enter the website ?'));
addAnswers( prompt('Are you a programmer?'));
addAnswers( prompt('Do you have any experiece of programming?'));

function addAnswers(answer){
    if(answer=='yes'|| answer=='Yes')
    answers.push("yes")
    else  if(answer=='no' || answer=='No')
    answers.push('no')
    else 
    answers.push('invalid')
}
console.log(answers);