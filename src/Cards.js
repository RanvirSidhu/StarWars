import React from 'react'
import './Cards.css'

class Cards extends React.Component {
render() {
            return (
                <div className='grid'>
                    {
                        this.props.people.map(user => {
                            return <div className='box'>
                                <h2>{user.name}</h2>
                                <h3>Height:{user.height}</h3>
                                <h3>Weight:{user.mass}</h3>
                            </div>
                        })
                    }
                    {
                        this.props.planets.map(user => {
                            return <div className='box' >
                                <h2>{user.name}</h2>
                                <h3>Climate:{user.climate}</h3>
                                <h3>Population:{user.population}</h3>
                            </div>
                        })
                    }
                    {
                        this.props.vehicles.map(user => {
                            return <div className='box'>
                                <h2>{user.name}</h2>
                                <h3>Model:{user.model}</h3>
                                <h3>Cost:{user.cost_in_credits}</h3>
                                <h3>Passengers:{user.passengers}</h3>
                            </div>
                        })
                    }
                    {
                        this.props.starships.map(user => {
                            return <div className='box'>
                                <h2>{user.name}</h2>
                                <h3>Model:{user.model}</h3>
                                <h3>Cost:{user.cost_in_credits}</h3>
                                <h3>Passengers:{user.passengers}</h3>
                            </div>
                        })
                    }
                </div>
            );
    }
}

export default Cards