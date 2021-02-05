import React, { Component } from 'react'
import './App.scss'
import Car from './Car/Car'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'
import Counter from './Counter/Counter'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cars: [
        {name: 'Ford', year: 2018},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2010}
      ],
      pageTitle: 'React components',
      showCars: false
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})

  }

  changeTitle = () => {

    if (this.state.pageTitle !== 'changed') {

      let newTitle = 'changed'

      this.setState({
        pageTitle: newTitle
      })
    } else {
      let newTitle =  'React components'

      this.setState({
        pageTitle: newTitle
      })
    }    
  }

  handleInput = (event) => {
    // event это события джаваскрипта
    // console.log('changed', event.target.value)
    // event.target.value текущее состояние value
    this.setState({
      pageTitle: event.target.value
    })
  }

  //Слово Mount переводится как "некоторое внедрение"
  //Всё ниже это жизненные циклы
  componentWillMount() {
  // Эта функция вызывается, когда произошла 
  // инициализация реакт компонента
  // Используется редко
    console.log('App componentWillMount')
  }

  componentDidMount() {
    //Вызывается, когда уже всё прогрузилось 
    console.log('App componentDidMount')
  }

  render() {
    //Этот метод формирует конечный JSX
    console.log('App render')
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car
              name={car.name}
              year={car.year}
              index={index}
              onDelete={this.deleteHandler.bind(this, index)}
              onChangeName={event => this.onChangeName(event.target.value, index)}
            />
          </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>

        <h1>{this.state.pageTitle}</h1>
        {/* <h1>{this.props.title}</h1> */}

        <Counter />

        <div style={{marginTop: '20px'}}>
          <input type="text" onChange={this.handleInput} />
          <button
          className={'AppButton'}
            onClick={this.changeTitle}>
          change title</button>
        </div>

        <div style={{
          marginTop: '20px'
        }}>
          <button
          className={'AppButton'}
          onClick={this.toggleCarsHandler}
          >Toggle cars</button>
        </div>


        <div style={{
          width: 400,
          margin: 'auto',
          marginTop: '20px'
        }}>
          { cars }
        </div>

      </div>
    );
  }
}

export default App
