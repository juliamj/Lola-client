import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import SelectSearch from 'react-select-search';

import Gender from './Gender';
import Avatar from './Avatar';
import { Birthday } from './Birthday';
import FreeText from './FreeText';
import Interests from './Interests';
import Languages from './Languages';
import Location from './Location';
import { AppContext } from '../Context/AppContext';

// import { accountService, alertService } from "@/_services";

export default function EditProfile({ history, value, _id }) {
  const { state, setState, updateProfile } = useContext(AppContext);
  //   const user = accountService.userValue;
  const initialValue = {
    freetext: '',
    Avatar: '',
    Gender: '',
    Birthday: '',
    Location: '',
    Languages: '',
    Interests: ''
  };
  const [formState, setFormState] = useState(initialValue);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);
    updateProfile();
  };

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <Avatar />
        <Gender />
        <Birthday />
        <FreeText value={formState.freeText} />
        <Location />
        <Languages />
        <Interests />
        <div className='form-group'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='btn btn-outline-success mr-2'
          >
            {isSubmitting && (
              <span className='spinner-border spinner-border-sm mr-1'></span>
            )}{' '}
            Update
          </button>
          <Link to='.' className='btn btn-link'>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
