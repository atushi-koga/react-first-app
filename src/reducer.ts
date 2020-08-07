import {reducerWithInitialState} from 'typescript-fsa-reducers'
import {TextInputActions} from "./actions";

export interface State {
    inputValue: string
}

export const initialState: State = {
    inputValue: '',
}

export const Reducer = reducerWithInitialState(initialState)
    .case(TextInputActions.updateTextInputValue, (state, inputValue) => (
        {...state, inputValue}
    ))
