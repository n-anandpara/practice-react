import React, { useState } from 'react'
import '../styles/AddItemStyle.css';

const AddItem = React.forwardRef(({addElement = () => {}}, ref) => {
    const [value, setValue] = useState('')

    const addElementOnEnter = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            setValue('');
            addElement(event.target.value);
        }
    }

    return (
        <form className='py-2'>
            <input
                value={value}
                className="input-class form-control-plaintext"
                ref={ref}
                autoFocus
                onChange={e => setValue(e.target.value)}
                onKeyPress={addElementOnEnter}
            />
        </form>
    )
});

export default AddItem;
