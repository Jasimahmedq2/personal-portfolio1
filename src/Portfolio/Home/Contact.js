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
    <div className='sm:flex px-6 py-12 contact-background' Id='contact'>
      <div className='sm:w-3/5  rounded-xl'>

        <iframe className='w-full h-full' id="gmap_canvas" src="https://maps.google.com/maps?q=bhairab%20dhaka,%20bangladesh%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

      </div>


      <div class="flex items-center justify-center w-1/2 px-4">
        <div class="w-full px-6 py-16 bg-base-100 rounded-lg shadow-2xl">
          <form class="mx-8 space-y-8"
            ref={form} onSubmit={sendEmail}>
            <div>
              <input type="text"
                name='user_name'
                class="w-full p-2 text-sm border-b-4   focus:border-black outline-none border-purple-500 "
                placeholder="Full Name" />
            </div>
            <div>
              <input type="email"
                name='user_email'
                class="w-full p-2 text-sm border-b-4   focus:border-black outline-none border-purple-500 "
                placeholder="Your Email" required/>
            </div>
      

              <div>
                <textarea name="message"
                  class="w-full p-2 text-sm border-b-4   focus:border-black outline-none border-purple-500 resize-none"
                  placeholder="Enter your message"></textarea>
              </div>

              
               <input type="submit" value="submit" className='block w-full px-2 py-4 mt-2  btn btn-outline' />
          </form>
        </div>
      </div>


      {/* <form className='text-center md:text-end py-6 ml-2 sm:w-2/5 ' >
        <input name='user_name' type="text" placeholder="Name" className="border w-full" required />
        <br />
        <input name='user_email' type="text" placeholder="Email" className="input w-full  mt-2" required />
        <br />
        <textarea name='message' style={{ resize: 'none' }} className="textarea w-full mt-2" placeholder="message" required></textarea>
        <br />
        <input className='btn btn-outline w-full max-w-xs mt-2' type="submit" value="Send" />

      </form> */}
    </div>
  );
};

export default Contact;