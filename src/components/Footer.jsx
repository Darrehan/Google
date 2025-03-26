import React from "react";
import { ReactDOM } from "react";
function Footer(){
    const year=new Date().getFullYear();
    return(
       <footer>
    
            <p>copyright Dar Rehan Rasool ⓒ {year}</p>
        </footer>
    );
}
export default Footer;