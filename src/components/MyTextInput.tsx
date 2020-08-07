import React from 'react';

interface OwnProps {
    title: string
    inputValue: string
    onChangeValue: Function
}

type Props = OwnProps

export const MyTextInput: React.FC<Props> = (props) => {
    return (
        <div>
            <label>入力</label>
            <input name={props.title}
                   type='text'
                   value={props.inputValue}
                   onChange={(e) => props.onChangeValue(e.target.value)}/>
        </div>
    )
}
