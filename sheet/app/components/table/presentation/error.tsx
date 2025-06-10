import React from 'react';
import { ActionBar } from '.';

const Error = ({ isEmpty } : { isEmpty: boolean}) => {
  return (
    <div>
      <ActionBar />
      <div>
        <p> {isEmpty ? 'List is empty' : 'Something wrong. Please retry.'}</p>
      </div>
    </div>
  );
};

export default Error;
