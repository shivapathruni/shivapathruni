# Homework #5 Solution
**Shiva Pathruni**

**NetID: gu9436**

----
## Question1 : Install Node.js/NPM, version number, set up directory create package.json, install commonmark, run commonmark from command line with node.js

### (a)

![Answer1a](images/answer1a.png "icon")  

### (b) 
```      
<script>
   
function login_handler(form) {
    var ename=form.ename.value;
    var psw=form.psw.value;
    console.log("email: "+ename+", password: "+psw);

}

</script>
```

![Answer1b](images/answer1b.png "icon")

----
## Question2 : Bundler Installation and Use

### (a)
```
events = [{"name": "Mountain climbing",
           "dates": ["March 1st", "March 2nd", "March 3rd", "March 4th", "March 5th", "March 6th", "March 7th", "March 8th", "March 9th", "Maarch 10th", "etc..."]},
         {"name": "Light Music",
          "dates": ["April 1st", "April 2nd", "April 3rd", "April 4th", "April 5th"]},
         {"name": "Photography", "dates": ["Weekends in June and July"]},
         {"name": "Drama",
          "dates": ["May 1st", "May 2nd", "May 3rd", "May4th", "May 5th"]}
         ];
```

![Answer2a](images/answer2a.png "icon")

### (b)

***Update your club activity page. Used table here.***


![Answer2b](images/answer2b.png "icon")

### (c)

Java Script code in ***activities.js*** 
```
window.onload = function()    {
        let table_body= document.getElementById("act_section_main").getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];        
        tableresult=events.map(function (s) { 
        return "<tr>"+"<td>"+s.name+"<td>"+s.dates+"</tr>";
        }).join('');
        
        table_body.innerHTML=tableresult;
    }
```
HTML code in ***activities.html***
```
            <section id="act_section_main">
                <h2 align=center>Activity Schedule</h2>
                <table border="2px" style="border-color: aqua;border-block-color: cyan;border-right-color: aqua;border-left-color: aqua;border-top-color: aqua;border-bottom-color: aqua">
                    <thead>
                        <tr>
                            <td><b>Event</td>
                            <td><b>Dates</td>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </section>
```
![Answer2c](images/answer2c.png "icon")

----
## Question 3: Using Modules

### (a)

![Answer3a](images/answer3a.png "icon")

### (b)

![Answer3b](images/answer3b.png "icon")

### (c)

![Answer3c](images/answer3c.png "icon")

### (d)
```
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
  var ownmodal = document.getElementById("Sectionid_ThanksDialog");

  window.onclick = function(event) {
    if (event.target == ownmodal) {
      ownmodal.style.display = "none";
    }
  }
```
![Answer3d](images/answer3d.png "icon")

----
## Question 4: More Modules and Deployment

### (a)
```
<style>
.container  {
    display: grid;
    text-align: right;
    grid-template-columns: auto auto;
    grid-gap: 10px;
    padding: 10px;
    font-weight: bold;
}
textarea    {
    height: 100px;
}
</style>
```

![Answer4a](images/answer4a.png "icon")

### (b)
```
  .ShowDialog {
    display: none; 
    position: fixed; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
  }

  .modal-content {
    background-color: #fefefe;
    margin: 15% auto;  
    padding: 20px;
    border: 1px solid #888;
    width: 80%; 
  }
```
![Answer4b](images/answer4b.png "icon")

### (c)
```

button {
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}    


.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
  from {-webkit-transform: scale(0)} 
  to {-webkit-transform: scale(1)}
}
  
@keyframes animatezoom {
  from {transform: scale(0)} 
  to {transform: scale(1)}
}
span.psw {
  float: right;
  padding-top: 16px;
}

    
 .container  {
      display: grid;
      text-align: right;
      grid-template-columns: auto auto;
      grid-gap: 10px;
      padding: 10px;
      font-weight: bold;
  }
```
![Answer4c](images/answer4c.png "icon")

### (d)
```
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
nav {
    display: flex;
    align-self: start;
    }
```
![Answer4d1](images/answer4d1.png "icon")
![Answer4d2](images/answer4d2.png "icon")
![Answer4d3](images/answer4d3.png "icon")


----
## Question 5: React Intro, JSON data

**Answer5**

Testing done and every thing works fine.<br/>
Please use the below link to access my site **http://csweb01.csueastbay.edu/~gu9436/clubProject/**


----
----


