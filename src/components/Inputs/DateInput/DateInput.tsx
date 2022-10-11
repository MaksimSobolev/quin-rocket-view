import React from "react";
import { InputFormType } from "../../../interfaces/interfaces";


const DateInput = ({ dispatch, formActions, value, payloadValue }: InputFormType) => (
    <input
        type="date"
        value={value}
        id="window-start"
        onChange={(e) =>
            dispatch({
                type: formActions,
                payload: { [payloadValue]: new Date(e.target.value).toISOString() },
            })
        }
    />
)

export default DateInput;