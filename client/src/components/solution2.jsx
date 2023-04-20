import React from "react";

export default function Solution2 ({activity}) {
function Solution2 (){
    alert('ingresa los 5 vectores')
    let values = [1,2,3,4,5]
    for (let i = 0; i < values.length; i++) {
        values[i] = prompt('valor ' + (i+1));
    }
    alert(values)
}
    return (
        <li key={"activity2"}>{activity}: <a href="#" onClick={x=>Solution2()}>Resultado</a></li>
    )
}