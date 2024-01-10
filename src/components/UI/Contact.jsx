import React, { useState } from "react";
import { toast } from "react-toastify";
import Axios from 'axios';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const Contact = () => {
  const [form, setForm] = useState({
    name:'',
    email: '',
    subject:'',
    message:''
  })

  const onClickSend = () => {
   
    if(form.email === ''){
      return toast.warning('Email không được bỏ trống!')
    }
    if( validateEmail(form.email) === null){
      return toast.success('Email không đúng định dạng!')
    }
    const url = `${process.env.REACT_APP_BASE_API_URL}/api/portfolio/create`;
    const data = {
      name: form.name,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    Axios.post(url, data)
      .then((response) => {
        console.log(response,'dsadsa');
        if (response.status === 200) {
          toast.success('Gửi thành công!');
        } else {
          toast.error('Có lỗi xảy ra!');
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error('Có lỗi xảy ra!');
      });
    
  }
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor font-[700] text-[2.5rem] mb-8">Get in touch</h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6675785597904!2d106.4845547756955!3d10.83673135807715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310ad4562e665e83%3A0x20ff10bd75204cfb!2zVUJORCB4YcyDIMSQxrDMgWMgSG_MgGEgxJDDtG5n!5e0!3m2!1svi!2s!4v1704816382144!5m2!1svi!2s"
              className="border-0 w-full h-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt:w-1/2 md:mt-0 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8">
            <div className="w-full">
                <div className="mb-5">
                    <input onChange={(e)=>setForm({...form, name: e.target.value})} type="text" placeholder="Enter your name" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <input onChange={(e)=>setForm({...form, email: e.target.value})} type="email" placeholder="Enter your Email" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <input onChange={(e)=>setForm({...form, subject: e.target.value})} type="text" placeholder="Subjects" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <textarea onChange={(e)=>setForm({...form, message: e.target.value})} rows={3} type="text" placeholder="Write your message" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <button onClick={()=>onClickSend()} className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-100">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
