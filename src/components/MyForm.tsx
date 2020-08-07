import {MyTextInput} from "./MyTextInput";
import {MyTextShow} from "./MyTextShow";
import React from "react";
import {TopPageHandler} from "../container/PageContainer";


interface OwnProps {
    inputValue: string
}

type Props = OwnProps & TopPageHandler

export const MyForm: React.FC<Props> = (props) => (
    <>
        <MyTextInput title={"入力"} inputValue={props.inputValue} onChangeValue={props.handleOnChangeValue}/>
        <MyTextShow inputValue={props.inputValue}/>
    </>
)

