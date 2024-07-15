var r1=0,r2=0,r3=0
function fa(){
    var c1a=document.getElementById("nt1").value
    let c1am=Number(c1a)*599
    localStorage.setItem("c1-amt",c1am)
    var c2a=document.getElementById("nt2").value
    let c2am=Number(c2a)*899
    localStorage.setItem("c2-amt",c2am)
    var c3a=document.getElementById("nt3").value
    let c3am=Number(c3a)*699
    localStorage.setItem("c3-amt",c3am)
    let c=document.getElementById("amt1").textContent
    localStorage.setItem("c-amt",c)
}
function fa1(){
    var bv1=document.getElementById("nt1")
    let re4=document.getElementById("amt1")
    var t1=Number(bv1.value)
    r1=t1*599
    re4.textContent=r1+r2+r3
}
function fa2(){
    var bv2=document.getElementById("nt2")
    let re4=document.getElementById("amt1")
    var t2=Number(bv2.value)
     r2=t2*899
     re4.textContent=r2+r1+r3
   
}
function fa3(){
    var bv3=document.getElementById("nt3")
    let re4=document.getElementById("amt1")
    var t3=Number(bv3.value)
     r3=t3*699
     re4.textContent=r3+r2+r1
}
function inc1()
{
    var w=document.getElementById("decr")
    var bv=document.getElementById("nt1")
    var t=Number(bv.value)
    
    bv.value=t+1
    r1=bv.value*599
    
    if(bv.value>0){
        w.style.display='inline'
    }
}
function inc2()
{
    var w=document.getElementById("decr2")
    var bv=document.getElementById("nt2")
    var t=Number(bv.value)
    bv.value=t+1
    
    
    r2=bv.value*899
   
    if(bv.value>0){
        w.style.display='inline'
    }
}
function inc3()
{
    var w=document.getElementById("decr3")
    var bv=document.getElementById("nt3")
    var t=Number(bv.value)
    bv.value=t+1
    
    bv.value=t+1
    r3=bv.value*699
    
    if(bv.value>0){
        w.style.display='inline'
    }
}
function dec1()
{
    var w=document.getElementById("decr")
    var bv=document.getElementById("nt1")
    var t=Number(bv.value)
    bv.value=t-1
    
    
    r1=bv.value*599
    
    if(bv.value==0){
        w.style.display='none'
    }
}
function dec2()
{
    var w=document.getElementById("decr2")
    var bv=document.getElementById("nt2")
    var t=Number(bv.value)
    bv.value=t-1
   
    
    r2=bv.value*899
   
    if(bv.value==0){
        w.style.display='none'
    }
}
function dec3()
{
    var w=document.getElementById("decr3")
    var bv=document.getElementById("nt3")
    var t=Number(bv.value)
    bv.value=t-1
    
   
    r3=bv.value*699
    
    if(bv.value==0){
        w.style.display='none'
    }
}



