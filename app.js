let step = 0;

document.getElementById("forward").addEventListener('click',()=>{
    console.log("adelante");
    document.getElementById("step_" + step).style.display = 'none';
    step++;
    document.getElementById("step_" + step).style.display = 'flex';
})

document.getElementById("back").addEventListener('click',()=>{
    console.log("atras");
    document.getElementById("step_" + step).style.display = 'none';
    step--;
    document.getElementById("step_" + step).style.display = 'flex';
})