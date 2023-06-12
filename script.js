
function checkPrime(){
    let n,i,res=true;
    n = document.myForm.n.value;
    n = parseInt(n)
    if(n==1){
        document.getElementById("msg").innerHTML=n+" is neither prime nor composite number."
    }else if (n>1){
        for(i=2;i<=n-1;i++){
            if(n%i==0){
                res=false;
                break;
            }
        }
        if(res==true){
            document.getElementById("msg").innerHTML=n+" is a prime number."
        }else{
            document.getElementById("msg").innerHTML=n+" is not a prime number."
        }
    }else{
        document.getElementById("msg").innerHTML="Please enter the number which should be an positive integer."
    }
}


