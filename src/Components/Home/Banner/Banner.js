import React from 'react';

const Banner = () => {
    return (
        <div className='mb-5'>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1566375575165-95409ed8dbc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" class="d-block " width="100%" height="550px" alt="..." />
                        <div class="carousel-caption text-primary d-none d-md-block">
                            <h1>Afgan Mountains</h1>
                            <p className='bg-light w-50 mx-auto'>People are interested in afgan mountains </p>
                            <button className='btn btn-primary px-5 py-2'>Know More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1566560073340-0ee82cb29074?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" class="d-block w-100" height="550px" alt="..." />
                        <div class="carousel-caption text-primary d-none d-md-block">
                            <h1>KASHMIR MOUNTAINS</h1>
                            <p className='bg-light w-50 mx-auto'>Kashmir is the most popular travel side of the world</p><button className='btn btn-primary px-5 py-2'>Know More</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1548013146-72479768bada?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=876&q=80" class="d-block" width="100%" height="550px" alt="..." />
                        <div class="carousel-caption d-none d-md-block text-primary">
                            <h1 className=''>TAJMAHAL</h1>
                            <p className='bg-light w-50 mx-auto'>Travelers are offering a lots of Opportunities </p><button className='btn btn-primary px-5 py-2'>Know More</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;