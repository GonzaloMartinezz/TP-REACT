import React from "react";

class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
        this.incrementarContador = this.incrementarContador.bind(this);
        this.decrementarContador = this.decrementarContador.bind(this);
    }

    incrementarContador() {
        this.setState (prevState => ({
            contador: prevState.contador + 1    
        }))
    }

    decrementarContador() {
        this.setState (prevState => ({
            contador: prevState.contador - 1
        }))
    };

    render() {
        return (
            <div>
                <h1>Contador: {this.state.contador}</h1>
                <button onClick={this.incrementarContador}>Incrementar</button>
                <button onClick={this.decrementarContador}>Decrementar</button>
            </div>
        );
    }
}

export default Contador;