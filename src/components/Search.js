import React, {useState} from 'react'

export const Search = ({getQuery}) => {

    const [text, setText] = useState('')

    const textHandler = (e) =>{
        setText(e.target.value)
        getQuery(e.target.value)
    }

    return (
        <section className="search">
            <form>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Search Characters..." 
                    autoFocus
                    onChange={textHandler}
                    value={text}
                />
            </form>
        </section>
    )
}
