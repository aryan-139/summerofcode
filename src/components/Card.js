import React from 'react';
//what we are using in the code is jsx so in order to read jsx we have to import react 
const Card= ({ name,country,website,id}) => {
    
    return(
        <><div className=' tc-tj bg-washed-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='EPFL institute, Switzerland' src={require('./one.jpg?').default} width="325" height="325" />
            <div>
                <h2> {name}</h2>
                <p>{country}</p>
                <p1>{website}</p1>
                
            </div>
        </div></>
    );
}

export default Card;

