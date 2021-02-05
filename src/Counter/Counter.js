import React, {Component} from 'react'

import Auxiliary from '../hoc/Auxiliary'

export default class Counter extends Component {
    
    state = {
        counter: 0 
    }

    addCounter = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
        // Эта штука защищает от ассинхронных изменений стейта, потому что 
        // state может меняться ещё где-то на стороне в этот момент
    }

    render() {

        return (
            // Тут заместо ненужного блока див мы можем использовать собственный фрагмент, а не реактивный
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )

        // return (
        //     // Тут заместо ненужного блока див мы можем использовать фрагмент
        //     <React.Fragment>
        //         <h2>Counter {this.state.counter}</h2>
        //         <button onClick={this.addCounter}>+</button>
        //         <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        //     </React.Fragment>
        // )

        // return [
        //         <h2 key={'1'}>Counter {this.state.counter}</h2>,
        //         <button key={'2'} onClick={this.addCounter}>+</button>,
        //         <button key={'3'} onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
        // ]

        // Этим способом ты выводишь список элементов как массив, без корневого блока
        // но при этом необходимо задавать key, чтобы легче было манипулировать с элементами
    }
}