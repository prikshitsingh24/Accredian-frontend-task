import accredianLogo from "./assets/accredianLogo.png"
import anniversaryLogo from "./assets/anniversaryLogo.png"
import cashLeftLogo from "./assets/cashLeftLogo.png"
import cashRightLogo from "./assets/cashRightLogo.png"
import cashMiddleLogo from "./assets/cashMiddleLogo.png"
import cashAbovePhoneLogo from "./assets/cashAbovePhoneLogo.png"
import cashBelowPhoneLogo from "./assets/cashBelowPhoneLogo.png"
import flowChartLogo from "./assets/flowChartLogo.svg"
import Tables from "./components/tables"
function App() {


  return (
    <div>
      <div className="bg-(--nav-bar-blue) font-medium w-full h-[60px] flex justify-center items-center">
        Navigate your ideal career path with tailored expert advice <span className="text-(--text-blue) ml-4">Contact Expert</span>
      </div>
      <div className="grid grid-cols-[1fr_1360px_1fr] h-full w-full">
        <div></div>
        <div className="h-full w-full">
        <div className="flex flex-row justify-between items-center h-[79px] pt-[9.6px] mb-[9.6px]">
          <div className="flex flex-row space-x-5 items-center">
            <div>
              <img src={accredianLogo} alt="" width={125} height={36}/>
            </div>
            <div className="w-[116px] h-[40px] flex flex-row justify-center items-center font-medium text-[14.88px] bg-(--btn-blue) rounded-[6px] text-white">
              Courses
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
          <div className="w-[797px] h-[63px] flex flex-row items-center justify-center space-x-32 bg-(--container-blue) rounded-[38px]">
            <div className="text-(--text-blue) font-normal text-[25px]">
              Refer
            </div>
            <div className="text-(--text-gray) font-normal text-[25px]">
              Benefits
            </div>
            <div className="text-(--text-gray) font-normal text-[25px]">
              FAQs
            </div>
            <div className="text-(--text-gray) font-normal text-[25px]">
              Support
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
              <div className="w-[192px] h-[54px] flex justify-center items-center rounded-[8px] text-white mt-20 bg-(--btn-blue)">
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
      <div className="mt-10 flex flex-col items-center h-[785px] bg-(--container-white)">
        <div className="flex flex-row justify-center w-full mt-8 text-[27.66px] font-semibold">
          How Do I <span className="text-(--text-blue) ml-2">Refer?</span>
        </div>
        <div className="mt-10">
          <img src={flowChartLogo} alt="" />
        </div>
        <div>
        <div className="w-[236px] h-[64px] flex justify-center items-center rounded-[8px] text-white mt-20 bg-(--btn-blue)">
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
          <div className="w-[236px] h-[64px] flex justify-center items-center rounded-[8px] text-white bg-(--btn-blue)">
          Refer Now
        </div>
          </div>
          <div className="mt-36 flex flex-col ">
          <div className="text-[27.66px] font-semibold flex justify-center">Frequently Asked <span className="text-(--text-blue) ml-2">Questions</span></div>
          <div className="flex flex-row mt-20 space-x-20">
            <div className="space-y-4">
              <div className="w-[259px] h-[68px] rounded-[7px] shadow-lg flex justify-center items-center">
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
            <div className="text-(--text-blue) mb-10">Do I need to have prior Product Management and Project Management experience to enroll in the program?</div>
            <div className="mb-10">No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics,<br />making it suitable for individuals from any field of work.</div>
            <div>What is the minimum system configuration required?</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full rounded-[12px] p-2 bg-(--text-blue) h-[210px] mt-20">
          <div>

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
        </div>
        
        <div></div>
      </div>
      <div className="mt-10 flex flex-col items-center h-[795.88px] bg-(--bg-black)">
        
      </div>
    </div>
  )
}

export default App
