import React from 'react';

import Date from './date/Date';
import Base from './base/Base';
import Form from './form/Form';

import StyledConvertor from './Styled_Convertor';


const Convertor = () => (
  <StyledConvertor>
    <div className='convertor'>
      <div className='row no-gutters'>
        <div className='col-12 col-md-5 m-auto'>
          <div className='date'>
            <Date />
          </div>
          <div className='base'>
            <Base />
          </div>
        </div>
        <div className='col-12 col-md-7 m-auto'>
          <div className='form'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  </StyledConvertor>
);

export default Convertor;