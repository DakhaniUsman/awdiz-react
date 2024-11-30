import { useState } from "react";
import "./DynamicCss.css"

function DynamicCss () {

    const [isActive,setIsActive] = useState(false);
    const ButtonCss = isActive ? "active" : "inactive" ;

    function handleClick (){
        setIsActive(!isActive);
    }

    return (
        <div className="dynamic-div">
            <h1>Dynamic CSS Page</h1>
           <button className={ButtonCss}  onClick={handleClick}>{isActive ? "Active" : "Inactive"}</button>
        </div>
    )

}
export default DynamicCss;