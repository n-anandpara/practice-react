import React, { useState } from 'react'

export default function AddItem({addElement = () => {}}) {
    const [value, setValue] = useState('')

    const addElementOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setValue('');
            addElement(event.target.value);
        }
    }

    return (
        <form>
            <input value={value} onChange={e => setValue(e.target.value)} onKeyPress={addElementOnEnter}/>
        </form>
    )
}
