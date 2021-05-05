import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';
import emailSentGif from '../emailSentGif.gif'
import '../styles/Email.css'
init('user_zWKPutwDZrOGthmvXaByu');


function Email() {
    const { register, handleSubmit, watch, formState: { errors }  } = useForm();
// const onSubmit = data => console.log(data);

const [emailSent, setEmailSent] = useState("")

const onSubmit = (data) => {
    // console.log(data);
    sendForm('default_service', 'template_mqccxij', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        setEmailSent("Thanks for the email! I'll get back to you as soon as I can.")
      }, function(error) {
        console.log('FAILED...', error);
      });


  }


  
const message = watch('message') || "";
const messageCharsLeft = 1500 - message.length;
  return (
    <section id="Email" className='hero is-fullheight' >
        <div className="container">
              <h1 className="title is-3 has-text-centered">Contact</h1>
            <div className="card">
                <div  id="EmailContent" className="card-content">
    {!emailSent ?   <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
          <label class="label">Name</label>
  <input required className="input" maxLength='30' 
 type='text' name='user_name' placeholder='Name' {...register('user_name', { required: true })} />
 </div>

  <div className="field">
      <label  className="label">Email</label>  <input  required className="input" type='email' name='user_email' placeholder='Email'  {...register('user_email', { required: true })}/>
  <br/>
  </div>
  <div className="field">
          <label className="label">Message</label>
  <p className=''>Characters Left: {messageCharsLeft}</p>
          <div className="control">
  <textarea required className="textarea" maxLength='1500'
name='message' placeholder='Message' {...register('message', { required: true })}/>
</div>
</div>
  <br/>
  <div className="control">
  <input className="button is-link" type='submit' value='Send' />
  </div>
  
</form>
:
<div className="card-content" >
<h1 className="subtitle">{emailSent}</h1>
<div className="card-content is-flex is-justify-content-center is-align-items-center">
<img className="image" src={emailSentGif}/>
</div>
</div>
}</div>
</div>
</div>
    </section>
  );
}
export default Email;