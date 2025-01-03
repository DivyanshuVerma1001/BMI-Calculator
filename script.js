const form= document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#result');
    const des = document.querySelector('#discription')
    if(height===''||height<=0||isNaN(height)){
        result.innerHTML ="Please enter a valid height";
    }
    else if (weight===''||weight<=0||isNaN(weight)){
        result.innerHTML="Please enter a valid weight";
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<span> Your BMI is ${bmi}</span>`;
        if (bmi<18.5){
            des.innerHTML=`<span>Underweight</span>`;
        }else if(bmi>=18.5 && bmi<=24.9){
            des.innerHTML=`<span>Normal Weight</span>`;
        }else if(bmi>=25 && bmi<=29.9){
            des.innerHTML=`<span>Overweight</span>`;
        }else if (bmi>=30){
            des.innerHTML=`<span>Obesity</span>`;
        }   
    }     
});
