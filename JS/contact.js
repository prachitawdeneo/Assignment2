let fnameNode=document.getElementById("fname");
let err01Node=document.getElementById("err01");
expname= /^[A-Za-z]{2,100}$/;
function ValidateFName(){
    err01Node.innerHTML="";
    fnameNode.style.border="2px green solid";
    fnameNode.style.backgroundColor="light-green";
    let name=fnameNode.value;
    if(name===""){
      err01Node.innerHTML="<b>This field is required</b>";
      err01Node.style.color="red";
      fnameNode.style.border="2px red solid";
      fnameNode.style.backgroundColor="pink";
      return false;
    }
    else if(!(expname.test(name))){
        err01Node.innerHTML="<b>Only Alphabets allowed!</b>";
        err01Node.style.color="red";
        fnameNode.style.border="2px red solid";
        fnameNode.style.backgroundColor="pink";
        return false;
    }
    else
        return true;
}

let lnameNode=document.getElementById("lname");
let err11Node=document.getElementById("err11");
function ValidateLName(){
    err11Node.innerHTML="";
    lnameNode.style.border="2px green solid";
    lnameNode.style.backgroundColor="light-green";
    let name=lnameNode.value;
    if(name===""){
      err11Node.innerHTML="<b>This field is required</b>";
      err11Node.style.color="red";
      lnameNode.style.border="2px red solid";
      lnameNode.style.backgroundColor="pink";
      return false;
    }
    else if(!(expname.test(name))){
        err11Node.innerHTML="<b>Only Alphabets allowed!</b>";
        err11Node.style.color="red";
        lnameNode.style.border="2px red solid";
        lnameNode.style.backgroundColor="pink";
        return false;
    }
    else
        return true;
}

let mailNode=document.getElementById("mail");
let err2Node=document.getElementById("err2");
expmail=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
function ValidateMail(){
    err2Node.innerHTML="";
    mailNode.style.border="2px green solid";
    mailNode.style.backgroundColor="yellow";
    let mail=mailNode.value;
    if(mail===""){
        err2Node.innerHTML="<b>This field is required</b>";
        err2Node.style.color="red"
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor="pink";
        return false;
    }
    else if(!(expmail.test(mail))){
        err2Node.innerHTML="<b>Invalid Email Id</b>";
        err2Node.style.color="red"
        mailNode.style.border="2px red solid";
        mailNode.style.backgroundColor="pink";
        return false;
    }
    else
         true;
}

let phoneNode=document.getElementById("phone");
let err3Node=document.getElementById("err3");
expmob= /^[6-9][0-9]{9}$/;
function ValidatePhone(){
    err3Node.innerHTML="";
    phoneNode.style.border="2px green solid";
    phoneNode.style.backgroundColor="yellow";
    let name=phoneNode.value;
    if(name===""){
        err3Node.innerHTML="<b>This field is required</b>";
        err3Node.style.color="red";
        phoneNode.style.border="2px red solid";
        phoneNode.style.backgroundColor="pink";
        return false;
    }
    else if(!(expmob.test(name))){
      err3Node.innerHTML="<b>Only 10 Digits allowed!</b>";
      err3Node.style.color="red";
      phoneNode.style.border="2px red solid";
      phoneNode.style.backgroundColor="pink";
      return false;
  }
    else
        return true;
}

let feedNode=document.getElementById("enquiry");
let err4Node=document.getElementById("err4");
expfeed=/^[A-Za-z]{2,500}$/;
function ValidateFeed(){
  err4Node.innerHTML="";
  feedNode.style.border="2px green solid";
  feedNode.style.backgroundColor="light-green";
  let name=feedNode.value;
  if(name===""){
    err4Node.innerHTML="<b>This field is required</b>";
    err4Node.style.color="red";
    feedNode.style.border="2px red solid";
    feedNode.style.backgroundColor="pink";
    return false;
  }
  else if(!(expfeed.test(name))){
      err4Node.innerHTML="<b>Only Alphabets allowed!</b>";
      err4Node.style.color="red";
      feedNode.style.border="2px red solid";
      feedNode.style.backgroundColor="pink";
      return false;
  }
  else
      return true;
}

function ValidateForm(){
  let st1=ValidateFName();
  let st2=ValidateLName();
  let st3=ValidateMail();
  let st4=ValidatePhone();
  let st5=ValidateFeed();
  return(st1 && st2 && st3 && st4 && st5);

}
