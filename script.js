function addNewEQField(){
    //console.log ("Adding new field");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    let eqOb = document.getElementById("eq");
    let eqAddButtonOb = document.getElementById("eqAddButton");
    eqOb.insertBefore(newNode, eqAddButtonOb);
}

function addNewWEField(){
    //console.log ("Adding new field");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewACField(){
    //console.log ("Adding new field");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('acField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here");
    let acOb = document.getElementById("ac");
    let acAddButtonOb = document.getElementById("acAddButton");
    acOb.insertBefore(newNode, acAddButtonOb);
}

//generating resume
function generateCV(){
    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML= nameField;

    document.getElementById('nameT2').innerHTML= nameField;

    document.getElementById('contactT').innerHTML= document.getElementById('contactField').value;
    document.getElementById('addressT').innerHTML= document.getElementById('addressField').value;

    document.getElementById('fnameT').innerHTML= document.getElementById('fnameField').value;
    document.getElementById('dateT').innerHTML= document.getElementById('birthField').value;
    document.getElementById('reT').innerHTML= document.getElementById('rField').value;
    document.getElementById('lanT').innerHTML= document.getElementById('lField').value;
    document.getElementById('nationalityT').innerHTML= document.getElementById('nField').value;
    document.getElementById('hobbiesT').innerHTML= document.getElementById('ihField').value;

    document.getElementById('objectiveT').innerHTML= document.getElementById('objectiveField').value;

    let eqs=document.getElementsByClassName('eqField');
    let str='';
    for(e of eqs){
        str+=`<li> ${e.value} </li>`;
    }
    document.getElementById('eqT').innerHTML= str;

    let wes=document.getElementsByClassName('weField');
    let str1='';
    for(e of wes){
        str1+=`<li> ${e.value} </li>`;
    }
    document.getElementById('tsT').innerHTML= str1;

    let acs=document.getElementsByClassName('acField');
    let str2='';
    for(e of acs){
        str2+=`<li> ${e.value} </li>`;
    }
    document.getElementById('acT').innerHTML= str2;

    document.getElementById('decT').innerHTML= document.getElementById('declarationField').value;


    //code for profile picture
    let file=document.getElementById('imgField').files[0];
    console.log(file);
    let reader=new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    //setting image into template

    reader.onloadend=function(){
        document.getElementById('imgTemplate').src=reader.result;
    };
    
    
    
    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';



}

function printCV(){
    window.print();
}
$('.message a') .click (function(){
    $('form').animate({
      height:"toggle", opacity:"toggle"},"slow");
  });