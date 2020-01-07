import React from 'react';
import './Spinner.scss';

 const Spinner = () => {
    return (
        <div className='wrapper'>
          <div className="loader">
            <span>Loading...</span>
          </div>
        </div>
    )
}

export default Spinner;