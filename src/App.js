import React from 'react'
import Input from './Input'
import Cards from './Cards'
import './App.css'

class App extends React.Component{
  onchange = (event) => {
    let tmp=event.target.value;
    this.setState({display:tmp})
  }

  search = (event) => {
    this.setState({searching:event.target.value})
  }

  constructor() {
    super()
    this.state={
      display:'',
      searching:'',
      people:[],
      planets:[],
      vehicles:[],
      starships:[]
    }
  }

  async componentDidMount() {
    let tmp=await fetch('https://swapi.dev/api/people');
    let tmp2=await tmp.json();
    this.setState({people:tmp2.results})
    tmp=await fetch('https://swapi.dev/api/planets');
    tmp2=await tmp.json();
    this.setState({planets:tmp2.results})
    tmp=await fetch('https://swapi.dev/api/vehicles');
    tmp2=await tmp.json();
    this.setState({vehicles:tmp2.results})
    tmp=await fetch('https://swapi.dev/api/starships');
    tmp2=await tmp.json();
    this.setState({starships:tmp2.results})
  }
  render() {
    let pple=[],pla=[],veh=[],star=[];
    switch(this.state.display) {
      case 'people':pple=this.state.people;
        console.log(pple)
        break;
      case 'planets': pla=this.state.planets;
        break;
      case 'vehicles': veh=this.state.vehicles
        break;
      case 'starships': star=this.state.starships
        break;
      default:pple=this.state.people;
      pla=this.state.planets;
      veh=this.state.vehicles;
      star=this.state.starships;
    }

    pple=pple.filter(robots => {
      return robots.name.toString().toLowerCase().includes(this.state.searching.toString().toLowerCase())
  })

  pla=pla.filter(robots => {
    return robots.name.toString().toLowerCase().includes(this.state.searching.toString().toLowerCase())
})

veh=veh.filter(robots => {
  return robots.name.toString().toLowerCase().includes(this.state.searching.toString().toLowerCase())
})

star=star.filter(robots => {
  return robots.name.toString().toLowerCase().includes(this.state.searching.toString().toLowerCase())
})

    return (
      <div>
        <h1>Star Wars</h1>
        <Input changes={this.onchange} change={this.search}/>
        <Cards display={this.state.display} people={pple} planets={pla} vehicles={veh} starships={star}/>
        </div>
    );
  }
}

export default App;
