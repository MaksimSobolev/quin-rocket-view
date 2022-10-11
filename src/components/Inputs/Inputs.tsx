import { InputsFormType } from '../../interfaces/interfaces';
import { ACTIONS } from '../../store/actions';
import DateInput from './DateInput/DateInput';

const Inputs = ({ dispatch, formData, agencies, setSuccessful }: InputsFormType) => (
        <>
            <div>
                <label>Starting Date</label>
                <br />
                <DateInput
                    formActions={ACTIONS.SET_START_DATE}
                    dispatch={dispatch}
                    value={formData.windowStart.split('T')[0]}
                    payloadValue="windowStart"
                />
            </div>
            <div>
                <label>Ending Date</label>
                <br />
                <DateInput
                    formActions={ACTIONS.SET_END_DATE}
                    dispatch={dispatch}
                    value={formData.windowEnd.split('T')[0]}
                    payloadValue="windowEnd"
                />
            </div>
            <select
                value={formData.agency}
                onChange={(e) =>
                    dispatch({
                        type: ACTIONS.SET_AGENCY,
                        payload: { agency: e.target.value },
                    })
                }
            >
                <option hidden value="">
                    All agencies
                </option>
                {agencies.map((agency: string) => (
                    <option key={agency} value={agency}>
                        {agency}
                    </option>
                ))}
            </select>
            <div>
                <input 
                    type="checkbox"
                    id="success"
                    name="success"
                    onChange={() =>
                        setSuccessful((prevState) => !prevState)
                    }
                 />
                <label htmlFor="success"> show only succesful</label>
            </div>
        </>
    )

export default Inputs;