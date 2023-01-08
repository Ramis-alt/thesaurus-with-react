import React from 'react'
import { useState } from 'react'

export default function Header() {
    const [formData, setFormData] = useState({enterSearch: ""})

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    console.log(formData.enterSearch)
    return(
        <header>
            <h1 className='description'>Thesaurus with React. Type a word below</h1>
            <form id='word-form'>
                <input
                type="text" 
                placeholder='Type Your Word'
                onChange={handleChange}
                name="enterSearch"
                value={formData.enterSearch} 
                />
                <button>Enter</button>   
            </form>
        </header>
    )
}