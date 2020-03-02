import React from 'react';
import Cards from '../Elements/Cards';

const CardMaps = ({content, subject}) => {
    console.log("InsideMaps", content)
    return (
        <>
            {content.map(element =>(
                <Cards content={element[subject]}/>
            ))}

        </>
    )
}

export default CardMaps;