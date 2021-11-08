import React from 'react';
import './Subscibe.css'
const Subscibe = () => {
    return (
        <>

            <div className='container mx-center text-light Subscibe p-5 my-5'>
                <div className='mx-auto row '>

                    <div className=" col-md-5"><h5>Holiday special offer</h5>
                        <h1 className='text-danger fs-1 fw-bold'>HOLIDAY SPECIAL 25% OFF !
                        </h1>
                    </div>
                    <div class=" col-md-5 ">
                        <input type="text" placeholder="Your Email  " class="px-5 py-3  border" />
                        <input type="submit" class="px-5 py-3 border  btn-outline-danger" value="SIGN UP NOW" />
                    </div>




                </div>
            </div>
        </>
    );
};

export default Subscibe;