import React, { useEffect, useState } from 'react';

export const TitleInput = (props) => {
    const { value, onSubmit } = props;

    const [formVal, setFormVal] = useState(value)

    const [focused, setFocused] = useState(false)

    useEffect(() => {
        setFormVal(value)
    }, [value, setFormVal])

    const onSubmitForm = (e) => {
        e.preventDefault()
        onSubmit(formVal)
        setFocused(false)
    }

    return (
        <div onClick={() => setFocused(true)}>
            
            {focused ? (
                <form onSubmit={onSubmitForm}>
                    <input value={formVal} 
                    autoFocus
                    onChange={e => setFormVal(e.target.value)}
                    onBlur={() => setFocused(false)} />
                </form>
                ): <p>{value}</p>}

        </div>
    )
}