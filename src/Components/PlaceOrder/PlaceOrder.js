import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Registration from '../Header/Regitration/Registration';

//  this is a details page about a package
const PlaceOrder = () => {
    // const { user } = useAuth();
    const { id } = useParams();
    console.log(id)
    const [offer, setOffer] = useState();
    useEffect(() => {
        fetch(`https://lit-reaches-39691.herokuapp.com/package/${id}`)
            .then(res => res.json())
            .then(data => setOffer(data))
    }, [])

    // console.log(offer);
    return (
        <>
            <div className='row container mx-auto my-5 align-items-center'>
                <div className="col-md-7 border pb-3">
                    <img src={offer?.img} alt="" className="img-fluid" />
                    <div className="d-flex text-primary my-2 justify-content-around align-items-center">
                        <b className='bg-primary text-light px-3 py-2 rounded-pill'><i>PRICE : </i>{offer?.price}</b>
                        <h4>{offer?.packageName}</h4>
                    </div>
                    <p>{offer?.description}</p>

                </div>
                <div className="col-md-5">
                    <Registration offer={offer}></Registration>

                </div>
            </div>
        </>
    );
};

export default PlaceOrder;