const a=()=>{
    const b = 2024
    const c =(b%4==0 && b%100 !=0 || b%400==0)? "it is a leap year" : "it is not a leap year"
    console.log(c);
    
}
a()