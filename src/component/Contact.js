import React from 'react';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import "yup-phone";
import axios from 'axios'
import swal from 'sweetalert';
import './myStyles.css'
const Contact = () => {

    let schema = yup.object().shape({
        firstName: yup.string().lowercase().min(4, 'Must be at least 4 characters')
        .max(15, 'Must be 15 characters or less').required(),
        lastName: yup.string().lowercase().min(4, 'Must be at least 4 characters')
        .max(15, 'Must be 15 characters or less').required(),
        email: yup.string().email().required(),
        phone: yup.string("IN", true, 'mobile_no is invalid' ).phone().required()
      });

      const {register, handleSubmit, errors, reset} = useForm( {resolver: yupResolver(schema)})

      
      const onSubmit = (data) => {
        console.log(data)
        axios
        .post("https://chika-portfolio-server.herokuapp.com/users", data)
          .then(res => {
            if(res.data.result === "success") {
             swal("Success!", res.data.message, "success")
             .then(data => {
              console.log(res.data.result)
             },reset({})); 
            } else if (res.data.result === "error") {
                swal("Error", res.data.message, "error");
                console.log(res.data.error)
            }
          }).catch(error => {
            console.log(error);
            swal("Error","Unexpected error", "error")
          });
      };

    return ( <div>
        <section id="contact" className="s-contact target-section">

        <div className="overlay"></div>
  
        <div className="row narrow section-intro">
            <div className="col-full">
                <h3>Contact</h3>
                <h1>Say Hello.</h1>
                
                <p className="lead">

                Send me a message with a brief description of your project.
                I will review it and get back to you within one business day with free consultation and next steps.</p>
            </div>
        </div>

        <div className="row contact__main">
            <div className="col-eight tab-full contact__form">

            
      

     <form method="POST" name="contactForm" id="contactForm" className="contactForm" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
    
                    <div className="form-field">
                        <input name="firstName" 
                        type="text" 
                        id="firstName" 
                        ref={register}
                        className="full-width" 
                        pattern="[a-zA-Z]{1,}"
                        aria-invalid={errors.lastName ? "true" : "false"}
                        placeholder="First-Name" 
                        />
                        <p className="input-form" >{errors.firstName?.message}</p>
                    </div>

                    <div className="form-field">
                    <input 
                    name="lastName" 
                    type="text" 
                    id="lastName" 
                    ref={register}
                    className="full-width"
                    pattern="[a-zA-Z]{1,}"
                    aria-invalid={errors.lastName ? "true" : "false"}
                    placeholder="Last-Name" 
                    />
                    <p className="input-form" >{errors.lastName?.message}</p>
                </div>

                    <div className="form-field">
                        <input 
                         type="email" 
                        ref={register( {required: true})} 
                        className="full-width" 
                        name="email" 
                        id="email" 
                        placeholder="Email"
                        aria-invalid={errors.email ? "true" : "false"}
                        />
                        <p className="input-form">{errors.email?.message}</p>
                    </div>

                   
                    <div className="form-field">
                        <input 
                         type="tel" 
                        ref={register( {required: true})}
                        className="full-width" 
                        name="phone" 
                        id="phone" 
                        placeholder="Phone"
                        aria-invalid={errors.email ? "true" : "false"}
                        />
                        <p className="input-form">{errors.phone?.message}</p>
                    </div>

                    <div className="form-field">
                        <button className="full-width btn--primary" type="submit" >Submit</button>
                        
                    </div>
    
                    </fieldset>
                </form>

                
                <div className="message-warning">
                    Something went wrong. Please try again.
                </div> 
            
                
                <div className="message-success">
                    Your message was sent, thank you!<br/>
                </div>
                        
            </div>
            <div className="col-four tab-full contact__infos">
                <h4 className="h06">Phone</h4>
                <p>Phone: (+234) 70 30 586 560 <br/>
                Mobile: (+234) 70 54 977 160<br/>
                Mobile-2: (+234) 702 60 44 902
                </p>

                <h4 className="h06">Email</h4>
                <p>Hello@chikaonyema.com<br/>
                  chika.onyema01@gmail.com
                </p>

                <h4 className="h06">Address</h4>
                <p>
                8 Kadiri Street<br/>
                Fadeyi Yaba, Lagos<br />
                Nigeria.
                </p>
            </div>

        </div>
</section>
    
        
        
        </div> );
}
 
export default Contact;