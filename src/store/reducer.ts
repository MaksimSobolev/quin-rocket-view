import { formDataType } from '../interfaces/interfaces';
import { ACTIONS, ACTIONSENUM } from './actions';

interface formAction {
  type: ACTIONSENUM;
  payload: formDataType;
}

export default function reducer(
  formData: formDataType,
  action: formAction
) {
  switch (action.type) {
    case ACTIONS.SET_START_DATE:
      return { ...formData, windowStart: action.payload.windowStart };
    case ACTIONS.SET_END_DATE:
      return { ...formData, windowEnd: action.payload.windowEnd };
    case ACTIONS.SET_ONLY_SUCCESS:
      return { ...formData, status: action.payload.status };
    case ACTIONS.SET_AGENCY: {
      if (action.payload.agency === 'all') {
        return { ...formData, agency: '' };
      } else {
        return { ...formData, agency: action.payload.agency };
      }
    }
    default:
      return formData;
  }
}