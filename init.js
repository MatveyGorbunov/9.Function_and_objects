
//document.querySelector('#generating').addEventListener('click', function(){
    //const initPerson = personGenerator.getPerson();
    //document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    //document.querySelector('#genderOutput').innerText = initPerson.gender;
    //document.querySelector('#surnameOutput').innerText = initPerson.surname;
    //document.querySelector('#patronymicNameOutput').innerText = initPerson.patronymic;

//});

window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('patronymicNameOutput').innerText = initPerson.patronymic;
};

