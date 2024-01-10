import React from "react";
import heroImage from "../../assets/images/avarta.jpg";
import CountUp from "react-countup";
import { RiApps2Line } from "react-icons/ri";
import { FaYoutube, FaGithub, FaFacebookF, FaTelegramPlane  } from "react-icons/fa";
const Hero = () => {
  return (
    <section className="pt-0" id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* ========== hero left content ============== */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px]"
            >
              Hello welcome{" "}
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
            >
              I'm Trần Xuân Nhơn <br /> Software Developer
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              data-aos-delay="200"
              className="flex items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] ">
                  Hire me
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See portfolio
              </a>
             
            </div>
            <p
                data-aos="fade-left"
                data-aos-duration="1800"
                className="flex gap-2 mt-12 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
              >
                <span className="mt-1"><RiApps2Line size={25} /></span>
                Hello, I have more than 2 years of experience developing frontend websites and 1 year of experience developing backends. The technologies I use to develop websites are HTML, CSS, SCSS, Boostrap, JavaScript, React JS, React Native, Typescript, Nodejs, Github, Gitlab, Material-UI, Andt, Redux, Nextjs,MongoDB, SQL, MYSQL...
              </p>
              <div className="flex items-center gap-9 mt-14">
                <span className="text-smallTextColor text-[15px] font-[600]">Follow me:</span>
                <span >
                    <a className="text-smallTextColor text-[18px] font-[600]" target="_blank" href="#youtube"><FaYoutube size={30} /></a>
                </span>
                <span >
                    <a className="text-smallTextColor text-[18px] font-[600]" target="_blank" href="https://github.com/trannhon70/portfolio"><FaGithub size={30} /></a>
                </span>
                <span >
                    <a className="text-smallTextColor text-[18px] font-[600]" target="_blank"  href="https://www.facebook.com/xuannhon.tran.7/"><FaFacebookF size={30}/></a>
                </span>
                <span >
                    <a className="text-smallTextColor text-[18px] font-[600]" target="_blank" href="#youtube"><FaTelegramPlane  size={30} /></a>
                </span>
              </div>
          </div>
          {/* ========== hero left end ============== */}
          {/* ========== hero img ============== */}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className="flex items-center justify-center">
                <img className="rounded-2xl" src={heroImage} alt="" srcset="" />
            </figure>
          </div>
          {/* ========== hero img end ============== */}
          {/* ========== hero content right ============== */}
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={2} duration={2} suffix="+" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">Years of experience</h4>
            </div>
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={100} duration={2} suffix="%" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">Success Rate</h4>
            </div>
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={150} duration={2} suffix="+" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">Happy Clients</h4>
            </div>
            <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                    <CountUp start={0} end={15} duration={2} suffix="+" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">projects Completed</h4>
            </div>
          </div>
          {/* ========== hero content end ============== */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
