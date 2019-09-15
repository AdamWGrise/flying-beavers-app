import React from "react";
import "./style.css";

function Shopping(props) {
    console.log("props", props);
    return (
        <div>
            <h1>Shopping Lists Show Here</h1>
            <h2>
                {props.list.map((item, index) => (
                    <p key={index}>Hello, {item}</p>
                ))}
            </h2>
        </div>
    );
}

export default Shopping;

