import React from "react";
import ReactDOM  from "react-dom";
import "./index.css";

var curdate=new Date();
curdate=curdate.getHours();//Using get housr we are able to take only hour 
var currdate=new Date().toLocaleTimeString();
let say;
const cssStyle={};
if(curdate>=1 && curdate<12)
{
    say='Good Morning';
    cssStyle.color='blue';
}
else if(curdate>=12 && curdate<16){
    say='Good Afternoon';
    cssStyle.color='green';
}
else if(curdate>=17 && curdate<20){
    say='Good Evening';
    cssStyle.color='green';
}
else{
    say='good night';
    cssStyle.color='rgb(155, 39, 209)';
}

ReactDOM.render(<fieldset className="h2"><h1 className="h1" >Hello Sir, <span style={cssStyle}>{say}</span></h1><h1 className="h3"> Time:{currdate}</h1></fieldset>,document.getElementById('root'))