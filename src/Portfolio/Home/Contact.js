import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k5e5rpo', 'template_fnpki6m', form.current, 'YgRulTmORe8ZYcETe')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log('email js', error.text);
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
    <>

      <div className='sm:flex px-6 py-12 contact-background sm:space-x-6 ' Id='contact'>
        <div className='sm:w-3/5 outline  outline-offset-8 outline-white  rounded-xl p-6 space-y-4 relative'>
          <div style={{marginTop: '-3.5rem'}} className='bg-white p-2 w-1/3 mx-auto rounded-lg shadow-lg text-xl font bold absolute left-0 z-10'>
            <h2 className='text-center uppercase'>location</h2>
          </div> 

          <iframe className='w-full h-full rounded-lg shadow-lg' id="gmap_canvas" src="https://maps.google.com/maps?q=bhairab%20dhaka,%20bangladesh%20&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

        </div>


        <div class=" w-full sm:w-1/2 space-y-4 p-6  outline  outline-offset-8 outline-white rounded-lg relative mt-12 sm:mt-0">
        <div style={{marginTop: '-3.5rem'}} className='bg-white p-2 w-1/3 rounded-lg shadow-lg text-xl font bold absolute right-0 z-10 '>
            <h2 className='text-center uppercase'>contact</h2>
          </div> 
          <div class="w-full px-6 backdrop-blur-sm  bg-white/30 rounded-lg  shadow-2xl ">


            <form class=" space-y-8 py-6 "
              ref={form} onSubmit={sendEmail}>
              <div>
                <input type="text"
                  name='user_name'
                  class="w-full p-2 text-sm border-b-4   focus:border-black rounded shadow outline-none border-purple-500 "
                  placeholder="Full Name" />
              </div>
              <div>
                <input type="email"
                  name='user_email'
                  class="w-full p-4 text-sm border-b-4 rounded shadow  focus:border-black outline-none border-purple-500 "
                  placeholder="Your Email" required />
              </div>


              <div>
                <textarea name="message"
                  class="w-full p-2 text-sm border-b-4 rounded shadow  focus:border-black outline-none border-purple-500 resize-none"
                  placeholder="Enter your message"></textarea>
              </div>


              <input type="submit" value="submit" className='block w-full px-2 py-4 mt-2  btn btn-outline' />
            </form>
          </div>
        </div>


      </div>
    </>


  );
};

export default Contact;