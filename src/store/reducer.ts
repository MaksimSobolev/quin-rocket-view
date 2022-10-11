import { formDataType } from '../interfaces/interfaces';
import { FORMACTIONS, FORMACTIONSENUM } from './actions';

interface formAction {
  type: FORMACTIONSENUM;
  payload: formDataType;
}

export default function reducer(
  formData: formDataType,
  action: formAction
) {
  switch (action.type) {
    case FORMACTIONS.SET_START_DATE:
      return { ...formData, windowStart: action.payload.windowStart };
    case FORMACTIONS.SET_END_DATE:
      return { ...formData, windowEnd: action.payload.windowEnd };
    case FORMACTIONS.SET_ONLY_SUCCESS:
      return { ...formData, status: action.payload.status };
    case FORMACTIONS.SET_AGENCY: {
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