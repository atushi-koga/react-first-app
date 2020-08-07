import React from 'react';

interface OwnProps {
}

type Props = OwnProps

export const MyTextInput: React.FC<Props> = () => {
    return (
        <div>
            <label>入力</label><input type="text"/>
        </div>
    )
}