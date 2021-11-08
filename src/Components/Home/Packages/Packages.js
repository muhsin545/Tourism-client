import React, { useEffect, useState } from 'react';
import Package from './Package/Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://lit-reaches-39691.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <>
            <div className='my-5 CustomBorder ms-2'>
                <h1 className='text-start text-danger fs-1 fw-bold'>----HOT PACKAGES---</h1>

            </div>
            <div className="mx-auto text-center">
                {
                    packages.length === 0 ? <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                        : <div>
                            <div className='row container mx-auto'>
                                {
                                    packages.map(singlePackage => <Package
                                        key={singlePackage._id} singlePackage={singlePackage}></Package>)
                                }

                            </div>
                        </div>
                }
            </div>

        </>
    );
};

export default Packages;