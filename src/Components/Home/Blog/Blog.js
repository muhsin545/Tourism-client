import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <>
            <div className='my-5 mx-auto text-center w-75'>
                <b className='text-danger'>------------From Our Blog</b>
                <h1 className="fs-1 fw-bold text-danger">
                    OUR RECENT POSTS
                </h1>
                <p className="">
                    Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat.
                    Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.
                </p>
            </div >
            <div className="row container mx-auto g-3">
                <div className="col-md-4 border p-0 rounded-3 blogDiv">
                    <img src="https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img6.jpg" class="img-fluid rounded-3" alt="" />
                    <div className='my-3'>
                        <h5 className='ps-3'>Journeys are best measured in new friends</h5>
                        <div className='d-flex text-muted ps-3'>
                            <p>Demoteam  </p>
                            <p>|  August 17, 2021  </p>
                            <p>| No Comments</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 border p-0 rounded-3 blogDiv">
                    <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" class="img-fluid rounded-3" alt="" />
                    <div className='my-3'>
                        <h5 className='ps-3'>Take only memories, leave only footprints</h5>
                        <div className='d-flex text-muted ps-3'>
                            <p>Demoteam  </p>
                            <p>|  August 17, 2021  </p>
                            <p>| No Comments</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 border p-0 rounded-3 blogDiv">
                    <img src="https://demo.bosathemes.com/travele/wp-content/uploads/sites/13/2021/08/img4.jpg" class="img-fluid rounded-3" alt="" />
                    <div className='my-3'>
                        <h5 className='ps-3'>Life is a beautiful journey not a destination</h5>
                        <div className='d-flex text-muted ps-3'>
                            <p>Demoteam  </p>
                            <p>|  August 17, 2021  </p>
                            <p>| No Comments</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Blog;