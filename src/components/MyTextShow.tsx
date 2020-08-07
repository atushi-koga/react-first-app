import React from 'react'

interface OwnProps {
    inputValue: string
}

type Props = OwnProps

export const MyTextShow: React.FC<Props> = (props) => {
    return (
        <div>[state]: {props.inputValue}</div>
    )
}

