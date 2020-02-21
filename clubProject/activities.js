
window.onload = function()    {
        let table_body= document.getElementById("act_section_main").getElementsByTagName("table")[0].getElementsByTagName("tbody")[0];        
        tableresult=events.map(function (s) { 
        return "<tr>"+"<td>"+s.name+"<td>"+s.dates+"</tr>";
        }).join('');
        
        table_body.innerHTML=tableresult;
    }
