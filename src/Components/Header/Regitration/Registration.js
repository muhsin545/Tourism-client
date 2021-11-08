import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

// import Swal from "sweetalert2";
const Registration = ({offer}) => {
  
  
    console.log('offer',offer)
   
    const { user } = useAuth();
    console.log('user',user,'offer', offer)
    // const { firebaseContext } = useAuth();
    // const { user } = firebaseContext;
    const {register, reset, handleSubmit } = useForm();

    const onSubmit = (data) => {

        data.status = "pending";
        data.email = `${user?.email}`;
        fetch("https://lit-reaches-39691.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result)
                if (result.insertedId) {
                    // Swal.fire(
                    //     "Good job!",
                    //     "You booked this offer Successfully!",
                    //     "success"
                    // );
                    alert('Successfully booked the package')
                    reset();
                }
            })
    }
    return (
        <div>
            <div className="from-section">
                <h3 className="fw-bold">Purchase Package</h3>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input
                       value={user?.displayName}
                        {...register("name", { required: true })}

                    /><br />
                    <input
                      value={user?.email}
                        {...register("email", { required: true })}
                    /><br />
                    <input
                        value={offer?.packageName}
                        {...register("name", { required: true })}

                    /><br />
                    <input
                        placeholder="Your Number"
                        {...register("number", { required: true })}
                    />

                    <br />

                    <br />
                    <input className="submit-btn" type="submit" />
                </form>
            </div>
        </div>
    );

}
export default Registration;