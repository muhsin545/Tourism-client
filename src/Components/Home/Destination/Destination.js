import React from 'react';
import './Destination.css'
const Destination = () => {
    const style = {
        color: '#FEB900'
    }
    return (
        <>
            <div className="mt-5 ms-5 CustomBorder">
                <h1 style={style} className='fw-bold mb-3'>__________</h1>
                <p style={style}>POPULAR DESTINATION</p>

            </div>
            <div className="row container mx-auto">
                <div className="col-md-6 ">
                    <h1 className='fw-bold fs-1 text-danger'>TOP  DESTINATION</h1>
                </div>
                <div className="col-md-6">

                    <p className="text-muted">
                        Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.
                    </p>
                </div>

            </div>
            <div className="row container mx-auto">
                <div className="row col-md-6">
                    <div className="col-md-12 img Border p-0">
                        <button className='btn btn-primary px-5 button'>
                            Egypt
                        </button>
                        <img src="https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='img-fluid imgDestination' alt="" />
                    </div>
                    <div className="row col-md-12 my-3 g-3">

                        <div className="col-md-6 img Border p-0">
                            <button className='btn btn-primary px-5 button'>
                                Bangladesh
                            </button>
                            <img src="https://images.pexels.com/photos/122107/pexels-photo-122107.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 img Border p-0">
                            <button className='btn btn-primary px-5 button'>
                                KASHMIR
                            </button>
                            <img src="https://images.pexels.com/photos/7846473/pexels-photo-7846473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className='img-fluid' alt="" />
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <div className="row">

                        <div className="col-md-6 img Border p-0">
                            <button className='btn btn-primary px-5 button'>
                                India
                            </button>
                            <img src="https://images.unsplash.com/photo-1519955045385-7cdb8e07c76f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdpbnRlcmluJTIwaW5kaWF8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 img Border p-0">
                            <button className='btn btn-primary px-5 button'>
                                Nepal
                            </button>
                            <img src="https://media.istockphoto.com/photos/sunrise-on-mount-kanchenjugha-at-dawn-sikkim-picture-id543183018?b=1&k=20&m=543183018&s=170667a&w=0&h=CshPsEVesb_Yqtv5lFLCd1MPZuQqh7ygacNpwusiYXw=" className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="row my-3 ms-1">

                        <div className="img Border p-0">
                            <img src="https://images.unsplash.com/photo-1516616370751-86d6bd8b0651?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bmVwYWwlMjBpbiUyMHdpbnRlcnxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" className='img-fluid ' alt="" />
                            <button className='btn btn-primary px-5 button'>
                                kanchenjugha
                            </button>
                        </div>
                    </div>

                </div>

                <button className='btn btn-outline-primary px-5 w-50 mx-auto my-3'>
                    MORE DESTINATION</button>

            </div>
        </>
    );
};

export default Destination;