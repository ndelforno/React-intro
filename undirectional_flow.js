const { Component } = React;

const fruitList = [
  'Acai',
  'Aceola',
  'Apple',
  'Apricots',
  'Avocado',
  'Banana',
  'Blackberry',
  'Blueberries',
  'Camu Camu berry',
  'Cherries',
  'Coconut',
  'Cranberry',
  'Cucumber',
  'Currents',
  'Dates',
  'Durian',
  'Fig',
  'Goji berries',
  'Gooseberry',
  'Grapefruit',
  'Grapes',
  'Jackfruit',
  'Kiwi',
  'Kumquat',
  'Lemon',
  'Lime',
  'Lucuma',
  'Lychee',
  'Mango',
  'Mangosteen',
  'Melon',
  'Mulberry',
  'Nectarine',
  'Orange',
  'Papaya',
  'Passion Fruit',
  'Peach',
  'Pear',
  'Pineapple',
  'Plum',
  'Pomegranate',
  'Pomelo',
  'Prickly Pear',
  'Prunes',
  'Raspberries',
  'Strawberries',
  'Tangerine/Clementine',
  'Watermelon'
]

const FruitList = props => (
  <ul>
     {props.fruits.map(fruit => <li>{fruit}</li>)}
  </ul>
)

const FruitFilter = props => (
  <div>
    <label htmlFor="fruit-filter">Filter these Fruits: </label>
    <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
   </div>
)

class FruitContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fruitsToDisplay: props.fruits,
      unmatchedFruits: [],
      filterValue: '',
      isMatching: false,
    }

    this.handleFilterChange = this.handleFilterChange.bind(this)
    this.handleMatchingClick = this.handleMatchingClick.bind(this)
    this.handleUnmatchingClick = this.handleUnmatchingClick.bind(this)
  }

   handleMatchingClick() {
    this.setState({isMatching: true})
  }

   handleUnmatchingClick() {
    this.setState({isMatching: false})
  }



  // This method is accurate.
  handleFilterChange(event) {
    event.preventDefault();
    const filterValue = event.target.value;
    this.setState((prevState, props) => {
      const filteredFruitList = props.fruits.filter(fruit =>
        fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      const unmatchedFruits = props.fruits.filter(fruit =>
        !fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      return {
        fruitsToDisplay: filteredFruitList,
        unmatchedFruits: unmatchedFruits,
        filterValue
      }
    })
  }

  render() {
    const isMatching = this.state.isMatching;

    let button = null;
    let fruitChoice = null;

    if (isMatching){
      button = <UnmatchingButton onClick={this.handleUnmatchingClick} />;
      fruitChoice = this.state.fruitsToDisplay
    } else {
      button = <MatchingButton onClick={this.handleMatchingClick} />;
      fruitChoice = this.state.unmatchedFruits
    }

    return (
      <div>
        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
        {button}
        <FruitList fruits={fruitChoice} />
      </div>
    )
  }
}


// The two below methods have been added for you and don't need to change

function MatchingButton(props) {
    return (
      <button onClick={props.onClick}>
          Show matching fruits
      </button>
    )
}

function UnmatchingButton(props) {
  return (
    <button onClick={props.onClick}>
        Show unmatching fruits
    </button>
  )
}

class App extends Component {
  render() {
    return (
      <FruitContainer fruits={fruitList} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
