import axios from 'axios';

import { FetchParamsType } from '../interfaces/interfaces';
import axiosClient from './apiConfig';

export const getLaunches = ({windowStart, windowEnd, signal, setState, status}: FetchParamsType) => {
  console.log(status);
  return axiosClient.get(
    `/launch?window_start__gte=${windowStart}&window_end__lte=${windowEnd}${status !== undefined ? `&status=${status}` : ''}`,
    { signal }
  )
  .then(({ data }) => {
    console.log(data);
    setState(data.results);
  })
  .catch((err) => {
    if (axios.isCancel(err)) {
      console.log('canceled api call'); 
    } else {
      console.error(err);
    }
  });
};

export const getAgencies = ({signal, setState}: FetchParamsType) => {
  return axiosClient.get('/agencies', { signal })
  .then(({ data }) => {
    if (data.count) {
      const agenciesnames = data.results.map((agency: any) => agency.name);
      setState(agenciesnames);
    }
  })
  .catch((err) => {
    if (axios.isCancel(err)) {
      console.log('canceled api call');
    } else {
      console.error(err);
    }
  });
};
