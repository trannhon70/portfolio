import React from "react";

const Contact = () => {
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
            <form action="" className="w-full">
                <div className="mb-5">
                    <input type="text" placeholder="Enter your name" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <input type="email" placeholder="Enter your Email" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <input type="text" placeholder="Subjects" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <div className="mb-5">
                    <textarea rows={3} type="text" placeholder="Write your message" className="w-full p-3 focus:outline-none rounded-[5px]" />
                </div>
                <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white hover:bg-headingColor text-center ease-linear duration-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
