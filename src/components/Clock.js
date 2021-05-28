import React from 'react';

class Clock extends React.Component{
    state = {
        time: new Date()
    }


    currentTime(){
        this.setState({
            time: new Date()
        })
    }
    componentWillMount(){
        setInterval(()=>this.currentTime(),1000)
    }

    render(){
        return(
            <div className="clock-div">
                <span className="clock-p">{this.state.time.toTimeString().split(" ")[0]}</span>
                <span className="date-p">{this.state.time.getDate()}.{this.state.time.getMonth()+1}.{this.state.time.getFullYear()}</span>
            </div>
        )
    }
}

export default Clock;