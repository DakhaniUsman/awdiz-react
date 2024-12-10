import { memo } from "react";
import "./ChildrenComponent.css"

function ChildrenComponent({counter, increment}) {

    console.log("Children component is rendered⚡")

    return (
        <div className="children-component">
            <h2>Children Component</h2>
            <h2>Counter : {counter}</h2>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default memo(ChildrenComponent);

// memo prevents the component from re rendering if the props are not changed

// here the prop is counter which is the data of first counter

// when the first counter is changed it re renders the children component as we have sent the prop counter

// but when the second counter is changed it does not re render the children component as the prop provided was not changes

// remeber useMemo() is a hook used to cache the result betwenn re rendering

// memo() is a method used to prevents the component from re rendering if the props are not changed

// Note : if a thing is re created it is never the same technically⚡