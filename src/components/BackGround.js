import React from 'react';
var style= "div-sun";
function getBg(id){ 
    if(id === 800){
        style= "div-sun";
        return style
    }else{
        if(id >= 200 && id <= 232 ){
            style= "div-thunderstorm";
            return style
        }else{
            if((id >= 300 && id <= 321 )||( id >= 500 && id <= 531)){
                style= "div-rain";
                return style
            }else{
                if(id >= 600 && id <= 622){
                    style= "div-snow";
                    return style
                }else{
                    if(id > 801 && id <= 804){
                        style= "div-clouds";
                        return style    
                    }else{
                        if(id === 801){
                            style= "div-clouds-day";
                            return style  
                        }
                    }
                }
            }
        }
    }
    return <i></i>
}


const BackGround = (props) => {
        return(
            <div id="bg-div" className={getBg(props.id)}></div>
        )
}
export default BackGround;