import React from 'react';

class Searching extends React.Component{

    render(){
        return(
            <div className="searching-city-div">
                <form onSubmit={this.props.getTodayWeather}>
                    <input className="city-input" type="text" name="city" placeholder="City..." required />
                    <input className="country-input" type="text" name="country" placeholder="Country..." required/>
                    <button className="button-city" >Get Weather</button>
                </form> 
            </div>            
        );
    }
}

export default Searching;