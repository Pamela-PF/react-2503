import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    //devolver uma expressão
    return <div>Meu primeiro componente ReactJS</div>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)