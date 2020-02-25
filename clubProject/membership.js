
function Thanks(form)   
  {
          let p_thanks = document.getElementById("Sectionid_ThanksDialog").getElementsByTagName("p")[0];   
          var uname=form.uname.value;
          var ename=form.ename.value;
          var bname=form.bname.value;
          var lname=form.lname.value;
          var cname=form.cname.value;
          p_thanks.innerHTML="name: "+uname+", email: "+ename+", Activity: "+bname+", level: "+lname+", comments: "+cname;
          document.getElementById('Sectionid_ThanksDialog').style.display='block';
  }    


window.onload=function(event){


          var ownmodal = document.getElementById("Sectionid_ThanksDialog");
          window.onclick = function(event) {
          if (event.target == ownmodal) {
              ownmodal.style.display = "none";
          }
          }
          
          
}