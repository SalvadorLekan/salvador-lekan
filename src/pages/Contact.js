import React, { useState } from 'react'
import { SiGmail, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si'



function Contact() {
    const submitForm=(ev)=> {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
            form.reset();
            setState({ status: "SUCCESS" });
          } else {
            setState({ status: "ERROR" });
          }
        };
        xhr.send(data);
      }
    const [state, setState] = useState({status:''})
    return (
        <div className='grid place-items-center min-h-full'>
            <form onSubmit={submitForm} action='https://formspree.io/xjvpvgwo' method='POST' className='rounded-lg bg-orange-200 flex flex-col shadow-md p-2 text-lg'>
                <h2 className='font-bold text-center text-2xl text-blue-900'>Send A Message</h2>
                <input name='name' type='text' placeholder='Name'/>
                <input name='mail' type='email' placeholder='e-mail address'/>
                <textarea name='message' placeholder='message' required/>
                <button type='submit' className='bg-blue-800 text-indigo-100 font-semibold rounded-lg hover:bg-blue-900 py-1 my-1 justify-self-center'>Send</button>
            </form>
            <div className={`text-center text-white rounded-lg pb-4 px-3 ${state.status==='SUCCESS'? 'border-green-800 bg-green-400':state.status==='ERROR'?'bg-red-300 border-red-900':'hidden'}`}>
                <div className='grid'>
                    <div className='text-right font-extrabold text-4xl cursor-pointer' onClick={()=>setState({status:''})}>&times;</div>
                      {state.status==='SUCCESS'?
                    <div>
                          <h3 className='p-2 font-bold text-2xl'>Sent Successfully</h3>
                          <p className='text-xl'>You have successfully sent your message. <br/> I will get back to you shortly!</p>
                    </div>:
                    <div>
                      <h3 className='p-2 font-bold text-2xl'>Error!</h3>
                      <p className='text-xl'>Your message was not sent. <br/>Hint: Fill in the neccesary field before submitting.<br/> Thank you.</p>
                    </div>
                      }
                </div>
            </div>
            <section>
              <h2 className='text-2xl font-semibold'>Get in touch.</h2>
              <div className='flex justify-evenly text-2xl'>
                <a target='_blank' rel="noopener noreferrer" href='mailto: lekansalvador@gmail.com'><SiGmail className='text-gray-600 hover:text-red-800'/></a>
                <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/salvadorlekan/'><SiInstagram className='text-gray-600 hover:text-green-400'/></a>
                <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/salvadorlekan/'><SiTwitter className='text-gray-600 hover:text-blue-600'/></a>
                <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/salvadorlekan/'><SiLinkedin className='text-gray-600 hover:text-blue-500'/></a>
              </div>
            </section>
        </div>
    )
}

export default Contact
