// system 2
function clickBlue(){
    document.body.style.backgroundColor='blue';

}


// system 3
const pinkButton = document.getElementById('pink')
console.log(pinkButton)

pinkButton.onclick=clickPink;

function clickPink(){
    document.body.style.backgroundColor='pink';
}

// system 4

const magentaButton=document.getElementById('magenta');
magentaButton.onclick=function(){
    document.body.style.backgroundColor='magenta'
}



// system 5
 const yellowButton =document.getElementById('yellow')
 console.log(yellowButton);

yellowButton.addEventListener('click',clickYellow)
function clickYellow(){
    document.body.style.backgroundColor='yellow';
}


// system 6
const greenButton = document.getElementById('green')
greenButton.addEventListener('click',function() {
    document.body.style.backgroundColor='green'
}
)

// system 7
document.getElementById('black').addEventListener('click',function()
{
    document.body.style.backgroundColor='black'
})

document.getElementById('list').addEventListener('click',function(){

    const txt=document.getElementById('text');
    const p=document.getElementById('rocks')
    p.innerText=txt.value;
    txt.value='';
})