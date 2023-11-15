import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => {
    const { dispatch } = useContext(AppContext);

    const changeLocation = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
    };

    return (
        <div className='alert alert-success'>
            Location{' '}
            <select className="custom-select bg-success text-white" name="Location" id="Location" onChange={(event) => changeLocation(event.target.value)}>
                <option value="£">£ Pound</option>
                <option value="₹">₹ Rupee</option>
                <option value="€">€ Euro</option>
                <option value="USD">$ Dollar</option>
            </select>
        </div>
    );
};

export default Location;
