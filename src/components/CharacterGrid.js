import React from 'react'
import {Spinner} from './Spinner'

import { CharacterItem } from "./CharacterItem";

export const CharacterGrid = ({isLoading, items}) => {
    return isLoading ? 
    ( 
        <Spinner />
    ) : 
    
    ( <section className="cards" >
        {items.map((item) => (
            <CharacterItem  item={item} key={item.char_id} />
        ))}
    </section> 
    )
}
