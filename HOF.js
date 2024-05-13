const isEven= (no)=>{
    return no%2==0;
}
const func = (checkEven,num)=>{
    console.log('Function called..');
    console.log("Number is even -- "+checkEven(num))   
}
func(isEven,11)