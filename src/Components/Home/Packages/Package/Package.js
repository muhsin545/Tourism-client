import React, { useState } from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';
import './Package.css'
const Package = ({ singlePackage }) => {

    //  console.log(singlePackage)

    const { user } = useAuth();
    const history = useHistory();
    const seeDetails = (id) => {
        history.push(`/package/${id}`)
    }

    return (
        <>
            <div className="col-md-4 border my-3 p-0 package">
                <div className="p-0">
                    <img className='img-fluid' src={singlePackage.img} alt="" />
                </div>
                <div className="p-3 text-start py-2">
                    <h5 className='text-primary'>{singlePackage.packageName}</h5>
                    <p>{singlePackage.description?.slice(0, 250)}</p>
                    <div className="d-flex justify-content-around align-items-center">
                        <b className='bg-primary text-light px-3 py-2 rounded-pill'><i>PRICE : </i>{singlePackage.price}</b>
                        <button
                            onClick={() => { seeDetails(singlePackage._id) }} className="btn btn-outline-primary rounded-pill">PURCHASE NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Package;

