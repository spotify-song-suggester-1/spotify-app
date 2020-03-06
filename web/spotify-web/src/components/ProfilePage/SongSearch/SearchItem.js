import React from 'react';
import { Item, SearchImg } from "./SearchStyles";


const SearchItem = props => {
    console.log(props)
    return(
        <div>
            <Item key={props.resultData.trak_id}>
                <SearchImg src={props.resultData.album_art}/>
                {props.resultData.track_name}
            </Item>
        </div>
    )
}
export default SearchItem;