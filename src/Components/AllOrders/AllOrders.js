import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch(`https://lit-reaches-39691.herokuapp.com/allOrders`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, []);

    

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to Delete this order?');
        if (proceed) {
            fetch(`https://lit-reaches-39691.herokuapp.com/deleteOrders/${id}`, {
            method: 'DELETE',
            headers: {
                content: 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.deletedCount) {
                    window.location.reload() || alert('Successfully deleted')
                }
            })
        // console.log(id);
        }
    }
    const handleConfirmed = (id) => {
        fetch(`https://lit-reaches-39691.herokuapp.com/update/${id}`, {
            method: 'PUT',
            headers: {
                content: 'application/json'
            }
        }).then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    alert('Confirmed successfully ') || window.location.reload();
                }
            })
    }
    return (
        <div className='my-5 mx-auto text-center container'>
            <h4>all orders are available : {allOrders.length}</h4>
            {
                allOrders.map((order, index) => < div className="table-responsive-sm container mx-auto text-center" >
                    <table class="table  table-hover">
                        <thead>
                            <tr>
                                <th scope="col">index</th>
                                <th scope="col">Package</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>{index}</th>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.status}</td>
                                <td><button class="btn btn-primary" onClick={() => handleConfirmed(order._id)}>Confirm</button>
                                    <button class="btn btn-primary" onClick={() => handleDeleteOrder(order._id)}>Delete </button></td>
                            </tr>

                        </tbody>

                    </table>

                </div>

                )}
        </div>
    );
};

export default AllOrders;