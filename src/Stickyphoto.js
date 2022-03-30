
import Keyframes from '@keyframes/core';

function Sticky({photono}) {

    var style={
        display:'block',
        width:'10%',
        height:'25%',
        position:'absolute',
        background:'white',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.1)',
        animation: photono+' 1s ease-in forwards',
       
    };
    
    


    
    
    
    return (  
        <div className="photoholder"  style={style}>
            <div className="top">
                

            </div>
            <div className="bottom">
                <span >place</span>
                <br></br>
                <span>state</span>
            </div>

        </div>
  
    );
}

export default Sticky;