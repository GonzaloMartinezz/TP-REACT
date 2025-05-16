import React from "react";

class Reloj extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hora: new Date().toLocaleTimeString (),
            intervalId: null,
            isRunning: false
        };
        this.iniciarReloj = this.iniciarReloj.bind(this);
        this.detenerReloj = this.detenerReloj.bind(this);
    }
    componentDidMount () {
    }
    componentWillUnmount () {
        this.detenerReloj ();
    }

    iniciarReloj () {
      if ( !this.state.isRunning) {
          const intervalId = setInterval (() => {
              this.setState ({ hora: new Date().toLocaleTimeString () 
              });
          }, 1000);
          this.setState ({ intervalId: intervalId, isRunning: true });
        } else {
            this.setState ({ isRunning: true });
            this.state.intervalId = setInterval (() => {
                this.setState ({ hora: new Date().toLocaleTimeString () });
            }, 1000);
            this.setState ({intervalId: null , isRunning: false
            });
        }
    }
    detenerReloj () {
        if (this.state.isRunning && this.state.intervalId) {
            clearInterval (this.state.intervalId);
            this.setState ({ intervalId: null, isRunning: false });
        }
    }
    render() {
        return (
            <div>
                <h2>Hora Actual:{this.state.hora}</h2>
                <button onClick={this.iniciarReloj} disabled={this.state.isRunning}>Iniciar</button>
                <button onClick={this.detenerReloj} disabled={!this.state.isRunning}>Detener</button>
            </div>
        );
    }
}

export default Reloj;