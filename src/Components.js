import React from "react";

/**
 * Эта функция — компонент, потому что она получает данные в одном объекте («пропсы») в качестве параметра и возвращает
 * React-элемент. Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.
 */
function Welcome(props) {
    return <h1>Привет, {props.name}</h1>;
}

/**
 * Ещё компоненты можно определять как классы ES6:
 */
class Welcome2 extends React.Component {
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}

export {Welcome, Welcome2};