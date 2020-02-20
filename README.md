# Homework #3 Solution
**Shiva Pathruni**

**NetID: gu9436**

----
## Question1 : Images and Emojis

### (a)

Added images at front and at backend too. Images are less than 500KB. Here is the list.

###### Front-end:

**soccer.png** - In index.html page <br/>
**golf.png** - In activities.html page <br/>
**cricket.png** - In activities.html page<br/>

###### Back-end:

**backimage.jpg** - In index.html, activities.html, about.html pages <br/>
**westbayclublogo.png** - In index.html, activities.html <br/>
**ClubBanner2.png** - In about.html page <br/>

![Answer1a1](images/answer1a1.png "icon") <br/>     
![Answer1a2](images/answer1a2.png "icon") <br/>
![Answer1a3](images/answer1a3.PNG "icon") <br/>

### (b) 

**Smileys with its codes**

🏌   --GOLFER 127948 U+1f3cc <br/>
⛳   --FLAG IN HOLE 9971 U+26f3 <br/>
☺    --&#x263A <br/>
😀  --&#x1F600 <br/>

![Answer1b](images/answer1b.png "icon")

----
## Question2 : Server Deployment

### (a)

Moved my project to the public_html directory. 

![Answer2a](images/answer2a.png "icon")

### (b)

Testing done and every thing works fine.<br/>
Please use the below link to access my site **http://csweb01.csueastbay.edu/~gu9436/clubProject/**

![Answer2b1](images/answer2b1.png "icon") <br/>
![Answer2b2](images/answer2b2.png "icon") <br/>

----
## Question 3: JavaScript DOM and Arrays

### (a)
```
<script>
document.title = "Net id - gu9436 States.html";
document.getElementById("Author").innerHTML = "$hiva_Pathruni";
</script>
```
![Answer3a](images/answer3a.png "icon")

### (b)
```
<script>
    document.title = "Net id - gu9436 States.html";
    document.getElementById("Author").innerHTML = "$hiva_Pathruni";
 
    var NewStates = states.filter(function (e) {
    return e.state.length > 0});
    document.getElementById("Number").innerHTML = "Total " +NewStates.length+ " States" ;
        
    var statespopulation = states.map(function(item) {
    return item.population;  });
// Sum the array's values from left to right
    var total = statespopulation.reduce(function(prev, curr) {
    return prev + curr; });
    document.getElementById("TotalPop").innerHTML = "Total US population is : " +total+ ".";
</script>
```
![Answer3b](images/answer3b.png "icon")

### (c)
```
        let fivemostele = document.getElementById("Population").getElementsByClassName("most")[0];      
        fiveMost(); 
    function fiveMost()
    {
        states.sort(function (a, b) {
        return b.population - a.population;
        });
        myfivemost = states.slice(0,5).map(function(s){
            return "<li>"+s.state+" has "+s.population+"people</li>";
        }).join('');
        fivemostele.innerHTML=myfivemost;     
    }

        let fiveleastele = document.getElementById("Population").getElementsByClassName("least")[0];
        fiveLeast(); 
    function fiveLeast()
    {
        states.sort(function (a, b) {
        return a.population - b.population;
        });
        myfiveleast = states.slice(0,5).map(function(s){
            return "<li>"+s.state+" has "+s.population+"people</li>";
        }).join('');
        fiveleastele.innerHTML=myfiveleast;    
    }

```
![Answer3c](images/answer3c.png "icon")

----
## Question 4: HTML Table Generation

### (a)
```
    let statetablename = document.getElementById("AlphaName").getElementsByTagName("table")[0];
    let statetablenam=statetablename.getElementsByTagName("tbody")[0];
    stateTableName(); 
    function stateTableName()
    {
        states.sort(function (a, b) {
        var nameA = a.state.toUpperCase();
        var nameB = b.state.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return nameA - nameB;
        });
        statetablenamresult=states.map(function (s) { 
        return "<tr>"+"<td>"+s.state+" <td> "+s.population+"<td>"+s.nickname+"</tr>";
        }).join('');
        
        statetablenam.innerHTML=statetablenamresult;    
    }
```
![Answer4a](images/answer4a.png "icon")

### (b)
```
    let statetablecapi = document.getElementById("AlphaCapital").getElementsByTagName("table")[0];
    let statetablecap=statetablecapi.getElementsByTagName("tbody")[0];        
    stateTableCapital();
    function stateTableCapital()
    {
        states.sort(function (a, b) {
        var nameA = a.capital_city.toUpperCase();
        var nameB = b.capital_city.toUpperCase();
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return nameA - nameB;
        });
        statetablecapresult=states.map(function (s) { 
        return "<tr>"+"<td>"+s.capital_city+" <td> "+s.state+"<td>"+s.admission_date+"</tr>";
        }).join('');
        
        statetablecap.innerHTML=statetablecapresult;
    }
```
![Answer4b](images/answer4b.png "icon")

### (c)

Created states.css file

![Answer4c](images/answer4c.png "icon")

----
## Question 5: General & Table Styling

**Answer5**


![Answer5](images/answer5css.png "icon")


----
----


