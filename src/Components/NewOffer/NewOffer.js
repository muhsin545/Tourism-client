import React from 'react';
import { useForm } from 'react-hook-form';
import './NewOffer.css'
import logo from './../../images/logo1.png'
import useAuth from '../../Hooks/useAuth';
const NewOffer = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("https://lit-reaches-39691.herokuapp.com/packages", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert("Data inserted successfully")
                }

            })
        reset()
        console.log(data);
    };
    return (
        <>
            <div className='text-center text-danger  my-5'>
                <h1>hello {user?.email}</h1>
                <img src={logo} className='img-fluid' width='100px' alt="" />
                <h4 className='mt-3'>If YOU WANT TO OFFER A NEW PACKAGE PLEASE INSERT DATA HERE</h4>
            </div>

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input class="fs-5 text-danger" {...register("packageName", { required: true })} placeholder='Package Name' /> <br />
                    <input class="fs-5 text-danger" {...register("description", { required: true })} placeholder='Package Description' /> <br />
                    <input class="fs-5 text-danger" {...register("img", { required: true })} placeholder='Package Relevent Image' /> <br />
                    <input class="fs-5 text-danger" type="number" {...register("price", { required: true })} placeholder='Package Price' /> <br />
                    <input type="submit" class="px-5 py-3 border fs-5 fw-bolder btn-warning" value="SUBMIT" />
                </form>
            </div>
        </>
    );
};

export default NewOffer;