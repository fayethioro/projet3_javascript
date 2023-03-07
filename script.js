let blok=document.createElement('div');

blok.classList.add("notif");
document.body.appendChild(blok);

function notification(couleur,texte) 
{
    let chg=document.createElement('div');
    chg.style.backgroundColor=couleur;
    blok.appendChild(chg);
    chg.classList.add('dive');
    chg.innerHTML=texte;

    setTimeout(function(){
        chg.style.display='none';
        //chg.parentNode.removeChild(chg);
    }, 3000);

}
let button=document.getElementsByClassName('btn');

for(let i=0; i<button.length;i++)
{
    button[i].addEventListener('click',function(){
        let chg;
        if (button[i].classList.contains('success')) {
            chg=notification('green','notication success');
        }
        if (button[i].classList.contains('danger')) {
            chg=notification('red','notication danger');
            
        }
        if (button[i].classList.contains('warning')) {
            chg=notification('yellow','notication warning');
        }
        if (button[i].classList.contains('notication info')) {
            chg=notification('blue','infos');  
        }
    })
}