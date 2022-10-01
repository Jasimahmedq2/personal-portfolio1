import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfwwiwi', 'template_30z7jrd', form.current, 'YgRulTmORe8ZYcETe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      toast.success('Send successful', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
      e.target.reset()
  };

  return (
    <div className='bg-base-300 flex px-6'>
      <div className='w-3/5 py-2 rounded-xl'>
  
     <iframe className='w-full h-full'  id="gmap_canvas" src="https://maps.google.com/maps?q=bhairab%20dhaka,%20bangladesh%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

      </div>

      <form className='text-end py-6 w-2/5 ' ref={form} onSubmit={sendEmail}>
        <input name='user_name' type="text" placeholder="Name" className="input w-full max-w-xs" />
        <br />
        <input name='user_email' type="text" placeholder="Email" className="input w-full max-w-xs mt-2" />
        <br />
        <textarea name='message' style={{resize: 'none'}} className="textarea w-full max-w-xs mt-2" placeholder="message"></textarea>
        <br />
        <input className='btn btn-outline w-full max-w-xs mt-2' type="submit" value="Send" />

      </form>
    </div>
  );
};

export default Contact;