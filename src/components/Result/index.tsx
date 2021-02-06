import React from 'react';
import { useParams } from 'react-router-dom';
export interface ResultParamsType {
  id: string;
}

function Result() {
  const param = useParams<ResultParamsType>();

  console.log(param);
  console.log('gkdl');
  return <div>Result{param.id}</div>;
}
export default Result;
