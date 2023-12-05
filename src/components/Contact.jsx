import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "./site/Alert";

export default function Contact(){

    const [from_email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [loading,setLoading] = useState(false)
    const [res,setRes] = useState(null)
    const {register,handleSubmit} = useForm();
    

    const submitForm = async (data)=>{
        setLoading(true)
        const response = await fetch('http://localhost:8080/api/contact-us',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({from_email,message})
            })

        const resData = await response.json();

        const payload = {
            payload: resData,
            status: response.status
        };

        setRes(payload)
        setLoading(false)
        setEmail('')
        setMessage('')
        return payload;
    }

    return (
        <section id="contact" class="position-relative section">
            <div class="container text-center">
                <h6 class="subtitle">Contact</h6>
                <h6 class="section-title mb-4">Get In Touch With Me</h6>
                {/* <p class="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br/> rerum commodi corrupti, temporibus non quam.</p> */}

                <div class="contact text-left">
                    <div class="form">
                        <h6 class="subtitle">Available 24/7</h6>
                        <h6 class="section-title mb-4">Get In Touch</h6>
                        {res && <Alert type={res.status} message={res.payload.message}/>}
                        
                        <form onSubmit={handleSubmit(submitForm)}>
                            <div class="form-group">
                                <input style={{'borderColor':from_email === ''? "crimson": ''}} type="email" {...register('from_email')} onChange={(e)=>setEmail(e.target.value)} value={from_email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            </div>
                            <div class="form-group">
                                <textarea style={{'borderColor':message === ''? "crimson": ''}}  name="contact-message" {...register('message')} onChange={(e)=>setMessage(e.target.value)} id="" cols="30" rows="5" class="form-control" placeholder="Message">{message}</textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block rounded w-lg"  disabled={loading}>{loading === true ? 'Please Wait..' : 'Send Message'}</button>
                        </form>
                    </div>
                    <div class="contact-infos">
                        <div class="item">
                            <i class="ti-location-pin"></i>
                            <div class="">
                                <h5>Location</h5>
                                <p> Oulu, Finland</p>
                            </div>                          
                        </div>
                        <div class="item">
                            <i class="ti-mobile"></i>
                            <div>
                                <h5>Phone Number</h5>
                                <p>(+358)415765303</p>
                            </div>                          
                        </div>
                        <div class="item">
                            <i class="ti-email"></i>
                            <div class="mb-0">
                                <h5>Email Address</h5>
                                <p>madushan.gangoda94@gmail.com</p>
                            </div>
                        </div>
                    </div>                  
                </div>
            </div>  
            <div id="map" style={{backgroundColor:'antiquewhite'}}>
                {/* <iframe src="https://snazzymaps.com/embed/61257"></iframe> */}
            </div>      
        </section>
    );
}