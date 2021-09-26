//set initial value 
let count = 0;

const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) {
    // console.log(something);
    btn.addEventListener('click',function(event){
        const styles = event.currentTarget.classList; 
        if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('decrease')){
            count--;
        }
        else{
            count =0;      
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
        value.textContent=count;
    });
});

// var one = 1;
// var two = 2;
// var result = one + two;
// console.log(result);








// // increase button event handler
// const increase = document.getElementById('increase');
// const decrease = document.getElementById('decrease');
// increase.addEventListener('click',function(){
//     const value =  document.getElementById('value').innerText;
//     const valueNumber = parseFloat(value);
//     result = valueNumber + 1;
//     document.getElementById('value').innerText = result;
// });
// decrease.addEventListener('click',function(){
//     const value =  document.getElementById('value').innerText;
//     const valueNumber = parseFloat(value);
//     // document.getElementById('value').color = red;
//     result = valueNumber + -1;
//     document.getElementById('value').innerText = result;
// });

// reset.addEventListener('click',function(){
//     const value =  document.getElementById('value').innerText = 0;
    
// });