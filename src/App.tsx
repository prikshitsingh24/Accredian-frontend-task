import accredianLogo from "./assets/accredianLogo.png"
import anniversaryLogo from "./assets/anniversaryLogo.png"
import cashLeftLogo from "./assets/cashLeftLogo.png"
import cashRightLogo from "./assets/cashRightLogo.png"
import cashMiddleLogo from "./assets/cashMiddleLogo.png"
import cashAbovePhoneLogo from "./assets/cashAbovePhoneLogo.png"
import cashBelowPhoneLogo from "./assets/cashBelowPhoneLogo.png"
import flowChartLogo from "./assets/flowChartLogo.svg"
import Tables from "./components/tables"
import { useRef, useState } from "react"
import ReferralForm from "./components/referralForm"
import customerSupportLogo from "./assets/customerSupportLogo.png"
import circleLogo from "./assets/circleLogo.png"
import accredianLogoBottom from "./assets/accredianLogoBottom.png"
import plusLogo from "./assets/plusLogo.png"
import facebookLogo from "./assets/facebookLogo.png"
import linkedInLogo from "./assets/linkedInLogo.png"
import twitterLogo from "./assets/twitterLogo.png"
import instagramLogo from "./assets/instagramLogo.png"
import youtubeLogo from "./assets/youtubeLogo.png"
import blueArrowLogo from "./assets/blueArrowLogo.png"
import IsPhone from "./components/isPhone"
import phoneFlowChartLogo from "./assets/flowChartLogo.svg"
import phoneCashRightLogo from "./assets/phoneCashRightLogo.png"
import phoneCashBottomRightLogo from "./assets/phoneCashBottomRightLogo.png"
import phoneCashBottomLeftLogo from "./assets/phoneCashBottomLeftLogo.png"
import menuLogo from "./assets/menuLogo.png"
import whiteArrowLogo from "./assets/whiteArrowLogo.png"
import whiteDownArrowLogo from "./assets/whiteDownArrowLogo.png"
import upwardArrowLogo from "./assets/upwardArrowLogo.png"
import downwardArrowLogo from "./assets/downwardArrowLogo.png"
import callLogo from "./assets/callLogo.png"

function App() {
  const isPhone = IsPhone();
  const referRef = useRef<any>(null);
  const benefitsRef = useRef<any>(null);
  const faqRef = useRef<any>(null);
  const supportRef = useRef<any>(null);
  const [refer,setRefer] = useState(true);
  const [benefits,setBenefits] = useState(false);
  const [faq,setFaq] = useState(false);
  const [support,setSupport] = useState(false);
  const [referralForm,setReferralForm] = useState(false);

  const handleReferClick=()=>{
    setReferralForm(!referralForm);
  }

  const handleReferScrollClick=()=>{
    setSupport(false);
    setFaq(false);
    setBenefits(false);
    setRefer(true);
    if(referRef.current){
      referRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleBenefitsClick=()=>{
    setRefer(false);
    setSupport(false);
    setFaq(false);
    setBenefits(true);
    if(benefitsRef.current){
      benefitsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleFaqClick=()=>{
    setRefer(false);
    setSupport(false);
    setBenefits(false);
    setFaq(true);
    if(faqRef.current){
      faqRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleSupportClick=()=>{
    setRefer(false);
    setBenefits(false);
    setFaq(false);
    setSupport(true);
    if(supportRef.current){
      supportRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }


  if (isPhone){
    return (
      <div>
        {referralForm && (
          <div className="w-full h-full flex justify-center items-center fixed z-100 backdrop-blur-sm">
            <ReferralForm formStatus={handleReferClick}/>
          </div>
        )}
        <div className="bg-(--nav-bar-blue) pl-2 text-[14px] relative font-medium w-full h-[60px] flex justify-between items-center">
          <div>Navigate your ideal career path with<br />tailored expert advice</div>
          <div className="text-(--text-blue) ml-4 font-bold text-[16px] absolute right-2 top-5">Contact Expert</div> 
        </div>
        <div className="h-full w-full pl-2 pr-2">
          <div className="h-full w-full">
          <div className="flex flex-row justify-between items-center h-[79px] pt-[9.6px] mb-[9.6px]">
            <div className="flex flex-row w-full items-center justify-between">
              <div>
                <img src={accredianLogo} alt="" width={125} height={36}/>
              </div>
              <div className="flex">
              <div className="w-[112px] mr-5 h-[40px] flex flex-row justify-center items-center font-medium text-[14.88px] bg-(--btn-blue) rounded-[3px] text-white">
                Explore
                <img src={whiteArrowLogo} className="ml-3" alt="" />
              </div>
              <div>
                <img src={menuLogo} alt="" />
              </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-[79px] w-full">
            <div className="w-full font-roboto h-[63px] flex flex-row items-center justify-evenly bg-(--container-blue) rounded-[38px]">
              <div className="text-(--text-blue) font-normal text-[15px] cursor-pointer" onClick={handleReferClick}>
                Refer
              </div>
              <div className="text-(--text-gray) font-normal text-[15px] cursor-pointer" onClick={handleBenefitsClick}>
                Benefits
              </div>
              <div className="text-(--text-gray) font-normal text-[15px]">
                FAQs
              </div>
              <div className="text-(--text-gray) font-normal text-[15px]">
                Support
              </div>
            </div>
          </div>
          <div className="mt-4 h-[252px] bg-(--container-white) rounded-[29px] shadow-xl relative">
            <div className="absolute">
              <img src={cashLeftLogo} alt="" width={75} height={42}/>
            </div>
            <div className="absolute right-3 top-3">
              <img src={phoneCashRightLogo} alt="" width={36.71405327592819} height={36.71405327592819}/>
            </div>
            <div className="absolute bottom-0 right-0 z-0">
              <img src={phoneCashBottomRightLogo} alt="" width={83} height={46}/>
            </div>
            <div className="absolute left-0 bottom-2 right-0 ">
              <img src={phoneCashBottomLeftLogo} alt="" width={83} height={46}/>
            </div>
            <div className="h-full w-full flex flex-row justify-center  space-x-6">
              <div className="mt-8">
              <div className="text-[40px] font-bold text-[#000] leading-[1.1]">
                Let's Learn & Earn
              </div>
                <div className="mt-5 text-[16px] text-(--text-black) flex flex-col items-center">Get a chance to win up-to<br /><span className="text-(--text-blue) font-bold text-[16px]">Rs. 15,000</span></div>
                <div className="flex justify-center">
                <div className="w-[152px]  h-[54px] relative flex justify-center items-center rounded-[3px] text-white mt-8 bg-(--btn-blue) cursor-pointer" onClick={handleReferClick}>
                  Refer Now
                </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center h-[992px] bg-(--container-white)">
          <div className="flex flex-row justify-center mt-5 w-full text-[22px] font-semibold">
            How Do I <span className="text-(--text-blue) ml-2">Refer?</span>
          </div>
          <div>
            <img src={phoneFlowChartLogo} alt="" height={314}/>
          </div>
          <div>
          <div className="w-[152px] h-[43px] flex justify-center items-center rounded-[3px] text-white  bg-(--btn-blue) cursor-pointer" onClick={handleReferClick}>
            Refer Now
          </div>
          </div>
        </div>
      </div>
    )
  }

  else{
    return (
      <div>
        <div className="fixed right-5 bottom-5 z-9">
          <img src={callLogo} alt="" />
        </div>
        {referralForm && (
          <div className="w-full h-full flex justify-center items-center fixed z-100 backdrop-blur-sm">
            <ReferralForm formStatus={handleReferClick}/>
          </div>
        )}
        <div className="bg-(--nav-bar-blue) font-medium w-full h-[60px] flex justify-center items-center">
          Navigate your ideal career path with tailored expert advice <span className="text-(--text-blue) ml-4">Contact Expert</span>
        </div>
        <div className="grid grid-cols-[1fr_1360px_1fr] h-full w-full">
          <div></div>
          <div className="h-full w-full">
          <div className="flex flex-row justify-between items-center h-[79px] pt-[9.6px] mb-[9.6px]">
            <div className="flex flex-row space-x-5 items-center">
              <div>
                <a href="https://accredian.com/" target="_blank"><img src={accredianLogo} alt="" width={125} height={36}/></a>
              </div>
              <div className="w-[116px] h-[40px] flex flex-row justify-center items-center font-medium text-[14.88px] bg-(--btn-blue) rounded-[6px] text-white">
                Courses
                <img src={whiteDownArrowLogo} alt="" className="ml-2"/>
              </div>
            </div>
            <div className="flex flex-row space-x-5 items-center">
              <div className="font-medium text-[14.75px]">
                Refer & Earn
              </div>
              <div className="font-medium text-[14.75px]">
                Resources
              </div>
              <div className="font-medium text-[14.75px]">
                About Us
              </div>
              <div className="h-[40px] w-[77px] flex flex-row justify-center items-center rounded-[6px] bg-(--btn-white)">
                Login
              </div>
              <div className="w-[115px] h-[40px] flex flex-row justify-center items-center font-medium text-[14.88px] bg-(--btn-blue) rounded-[6px] text-white">
                Try for free
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-[79px] w-full">
            <div className="w-[797px] font-roboto h-[63px] flex flex-row items-center justify-center space-x-32 bg-(--container-blue) rounded-[38px]">
              <div className={`${refer?'text-(--text-blue)':'text-(--text-gray)'} flex flex-col items-center font-normal text-[25px] cursor-pointer`} onClick={handleReferScrollClick}>
                Refer
                {refer && <div className="w-[6px] h-[6px] bg-(--btn-blue) rounded-full "></div>}
              </div>
              <div className={`${benefits?'text-(--text-blue)':'text-(--text-gray)'} flex flex-col items-center font-normal text-[25px] cursor-pointer`} onClick={handleBenefitsClick}>
                Benefits
                {benefits && <div className="w-[6px] h-[6px] bg-(--btn-blue) rounded-full "></div>}
              </div>
              <div className={`${faq?'text-(--text-blue)':'text-(--text-gray)'} flex flex-col items-center font-normal text-[25px] cursor-pointer`} onClick={handleFaqClick}>
                FAQs
                {faq && <div className="w-[6px] h-[6px] bg-(--btn-blue) rounded-full "></div>}
              </div>
              <div className={`${support?'text-(--text-blue)':'text-(--text-gray)'} flex flex-col items-center font-normal text-[25px] cursor-pointer`} onClick={handleSupportClick}>
                Support
                {support && <div className="w-[6px] h-[6px] bg-(--btn-blue) rounded-full "></div>}
              </div>
            </div>
          </div>
          <div className="mt-4 h-[692px] bg-(--container-white) rounded-[29px] shadow-xl relative">
            <div className="absolute">
              <img src={cashLeftLogo} alt="" width={157} height={87}/>
            </div>
            <div className="absolute right-6">
              <img src={cashRightLogo} alt="" width={157} height={87}/>
            </div>
            <div className="absolute top-1/2 right-0 z-0">
              <img src={cashMiddleLogo} alt="" width={157} height={87}/>
            </div>
            <div className="absolute right-[500px] z-0">
              <img src={cashAbovePhoneLogo} alt="" width={157} height={87}/>
            </div>
            <div className="absolute left-[530px] bottom-10 right-0 z-10">
              <img src={cashBelowPhoneLogo} alt="" width={157} height={87}/>
            </div>
            <div className="h-full w-full flex flex-row justify-center space-x-6">
              <div className="mt-28">
              <div className="text-[88px] font-bold text-[#000] leading-[1.1]">
                Let's Learn<br />& Earn
              </div>
                <div className="mt-14 text-[40px] text-(--text-black)">Get a chance to win<br />up-to <span className="text-(--text-blue) font-bold">Rs. 15,000</span></div>
                <div className="w-[192px] h-[54px] flex justify-center items-center rounded-[8px] text-white mt-20 bg-(--btn-blue) cursor-pointer" onClick={handleReferClick}>
                  Refer Now
                </div>
              </div>
              <div>
                <img src={anniversaryLogo} className="relative z-auto" alt="" width={814} height={725}/>
              </div>
            </div>
          </div>
          </div>
          <div></div>
        </div>
        <div ref={benefitsRef} className="mt-10 flex flex-col items-center h-[785px] bg-(--container-white)">
          <div className="flex flex-row justify-center w-full mt-8 text-[27.66px] font-semibold">
            How Do I <span className="text-(--text-blue) ml-2">Refer?</span>
          </div>
          <div className="mt-10">
            <img src={flowChartLogo} alt="" />
          </div>
          <div>
          <div className="w-[236px] h-[64px] flex justify-center items-center rounded-[8px] text-white mt-20 bg-(--btn-blue) cursor-pointer" onClick={handleReferClick}>
            Refer Now
          </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1360px_1fr] h-full w-full">
          <div></div>
          <div className="h-full w-full pt-20">
            <div className="w-full flex justify-center">
              <div className="font-semibold text-[27.66px]">What Are The <span className="text-(--text-blue)">Referral Benefits?</span></div>
            </div>
            <Tables></Tables>
            <div className="flex justify-center mt-20">
            <div className="w-[236px] h-[64px] flex justify-center items-center rounded-[8px] text-white bg-(--btn-blue) cursor-pointer" onClick={handleReferClick}>
            Refer Now
          </div>
            </div>
            <div ref={faqRef} className="mt-36 flex flex-col ">
            <div className="text-[27.66px] font-semibold flex justify-center">Frequently Asked <span className="text-(--text-blue) ml-2">Questions</span></div>
            <div className="flex flex-row mt-20 space-x-20">
              <div className="space-y-4">
                <div className="w-[259px] h-[68px] border-2 border-(--border-white) rounded-[7px] shadow-lg flex justify-center items-center">
                  Eligibility
                </div>
                <div className="w-[259px] h-[68px] rounded-[7px] shadow-lg border flex justify-center items-center">
                  How To Use?
                </div>
                <div className="w-[259px] h-[68px] rounded-[7px] shadow-lg border flex justify-center items-center">
                  Terms and Condition
                </div>
              </div>
              <div>
              <div className="text-(--text-blue) mb-10 flex items-center">Do I need to have prior Product Management and Project Management experience to enroll in the program?  <div className="ml-4"><img src={upwardArrowLogo} alt="" width={12} height={7.14}/></div></div>
              <div className="mb-10">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics,<br />making it suitable for individuals from any field of work.</div>
              <div className="flex items-center">What is the minimum system configuration required? <div className="ml-4"><img src={downwardArrowLogo} alt="" width={12} height={7.14}/></div></div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between pl-10 pr-10 relative w-full rounded-[12px] p-2 bg-(--text-blue) h-[210px] mt-20">
            <div className="absolute right-0">
              <img src={circleLogo} alt="" />
            </div>
          <div className="flex flex-row space-x-10 w-full">
          <div>
              <img src={customerSupportLogo} alt="" />
            </div>
            <div>
              <div className="text-white text-[28.01px]">
                Want to delve deeper into the program
              </div>
              <div className="text-[16.73px] text-white">
                Share your details to receive expert insights from our program team!
              </div>
            </div>
          </div>
          <div className="h-[52px] w-[200px] relative rounded-[8px] z-auto flex justify-center items-center bg-white text-(--text-blue) ">
            Get in touch <div><img src={blueArrowLogo} alt="" className="ml-2" width={20} height={20}/></div>
          </div>
          </div>
          </div>
          
          <div></div>
        </div>
        <div ref={supportRef} className="mt-10 flex z-0 font-roboto flex-col items-center h-[795.88px] bg-(--bg-black)">
          <div className="w-[1200px] mt-10">
            <div className="flex flex-row items-center justify-between">
              <div><img src={accredianLogoBottom} alt="" /></div>
              <div className="flex flex-col justify-center items-center text-white">
                <div className="w-[250px] text-[14px] h-[39px] rounded-[8px] bg-(--btn-blue) flex justify-center items-center">
                  Schedule 1-on-1 Call Now
                </div>
                <div className="text-[14px]">Speak with our Learning Advisor</div>
              </div>
            </div>
            <hr className="mt-10 text-white"/>
            <div className="mt-10 text-white w-[1152px] h-[539px] gap-20 grid grid-cols-[3fr_4fr_2fr]">
              <div className="flex w-full flex-col space-y-5 items-start">
                <div className="text-[20px] font-normal">Programs</div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Data Science & AI</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Product Management</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Business Analytics</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Digital Transformation</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Business Management</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Project Management</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Strategy & Leadership</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Senior Management</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-[17px] font-bold">Fintech</div>
                  <div><img src={plusLogo} alt="" /></div>
                </div>
              </div>
              <div className="flex w-full flex-col items-start">
                <div className="text-[20px] font-normal">Contact Us</div>
                <div className="text-[14px] w-full mt-4">Email us (For Data Science Queries): admissions@accredian.com</div>
                <div className="text-[14px] w-full">Email us (For Product Management Queries):pm@accredian.com</div>
                <div className="text-[14px] w-full">Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)</div>
                <div className="text-[14px] w-full">Product Management Admission Helpline:+91 9625811095</div>
                <div className="text-[14px] w-full">Enrolled Student Helpline: +91 7969322507</div>
                <div className="text-[14px] w-full">Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015</div>
                <div className="text-[18px] font-normal">Why Accredian</div>
                <div className="text-[20px] font-[300px]">Follow Us</div>
                <div className="flex flex-row space-x-4 mt-2">
                  <a href="https://www.facebook.com/insaidlearn" target="_blank"><div><img src={facebookLogo} alt="" width={27.190000534057617} height={27.190000534057617} /></div></a>
                  <a href="https://www.linkedin.com/school/insaid/" target="_blank"> <div><img src={linkedInLogo} alt="" width={27.190000534057617} height={27.190000534057617} /></div></a>
                  <a href="https://x.com/insaidlearn" target="_blank"><div><img src={twitterLogo} alt="" width={27.190000534057617} height={27.190000534057617} /></div></a>
                  <a href="https://www.instagram.com/insaid.learn/" target="_blank"><div><img src={instagramLogo} alt="" width={27.190000534057617} height={27.190000534057617} /></div></a>
                  <a href="https://www.youtube.com/channel/UCE0L_4ADPU2iyKnDJ0xRzyA" target="_blank"><div><img src={youtubeLogo} alt="" width={27.190000534057617} height={27.190000534057617} /></div></a>
                </div>
              </div>
              <div className="flex w-full flex-col items-start">
                <div className="text-[20px] font-normal ">Accredian</div>
                <div className="flex flex-col space-y-1">
                <a href="https://accredian.com/About" target="_blank"><div className="text-[14px] font-normal mt-4">About</div></a>
                <a href="https://accredian.com/Career" target="_blank"><div className="text-[14px] font-normal">Careers</div></a>
                <a href="https://blog.accredian.com/" target="_blank"><div className="text-[14px] font-normal">Blog</div></a>
                <a href="https://accredian.com/policies/accredian-policy" target="_blank"><div className="text-[14px] font-normal">Admission Policy</div></a>
                <a href="https://accredian.com/terms/referral" target="_blank"><div className="text-[14px] font-normal">Referral Policy</div></a>
                <a href="https://accredian.com/terms/privacy" target="_blank"><div className="text-[14px] font-normal">Privacy Policy</div></a>
                <a href="https://accredian.com/terms" target="_blank"><div className="text-[14px] font-normal">Terms of Service</div></a>
                <a href="https://accredian.com/Faq" target="_blank"><div className="text-[14px] font-normal">Master FAQS</div></a>
                </div>
              </div>
            </div>
            <div className="flex justify-center text-white">
            © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
