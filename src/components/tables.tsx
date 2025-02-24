import arrowLogo from "../assets/arrowLogo.png"
import arrowBlackLogo from "../assets/arrowBlackLogo.png"

export default function Tables(){
    return(
        <div className="w-full mt-10">
            <div className="flex justify-end mr-44">
                Enrolled
            </div>
            <div className="flex flex-row w-full space-x-10 mt-2">
                <div className="w-[270px] h-[572px] flex flex-col shadow-xl rounded-b-[14px]">
                    <div className="rounded-t-[8px] bg-(--btn-blue) text-white w-full h-[50px] flex items-center text-[18px] pl-2 justify-between pr-2">
                        ALL PROGRAMS
                        <div>
                            <img src={arrowLogo} alt="" width={16} height={16}/>
                        </div>
                    </div>
                    <div className="h-[522px] p-2 flex flex-col space-y-2 w-full">
                    <div className="h-[43px]">
                    <div className="w-full h-[50px] font-semibold flex items-center text-[18px] justify-between ">
                        PRODUCT MANAGEMENT
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[47px]">
                    <div className="w-full h-[50px] font-semibold flex items-center text-[18px] justify-between ">
                        STRATEGY & LEADERSHIP
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-semibold flex items-center text-[18px] justify-between ">
                        BUSINESS MANAGEMENT
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-semibold flex items-center text-[18px] justify-between ">
                        FINTECH
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-semibold flex items-center text-[18px] justify-between ">
                        SENIOR MANAGEMENT
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-semibold flex items-center text-[18px] justify-between ">
                        DATA SCIENCE
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-semibold flex items-center text-[18px] justify-between ">
                        DIGITAL TRANSFORMATION
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px]  font-semibold flex items-center text-[18px] justify-between ">
                        BUSINESS ANALYTICS
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="w-[921px] h-[503px] pl-2">
                    <div className="w-full grid grid-cols-[10fr_4fr_3fr] gap-10 items-center pl-4 pr-4 rounded-t-[14px] h-[58px] bg-(--table-blue)"> 
                        <div className="text-[20px] text-(--text-dark-blue) font-[700px] h-full flex items-center border-r">Programs</div>
                        <div className="text-[20px] text-(--text-dark-blue) font-[700px] h-full flex border-r items-center">Referrer Bonus</div>
                        <div className="text-[20px] text-(--text-dark-blue) font-[700px] ">Referee Bonus</div>
                    </div>
                    <div className="w-full grid grid-cols-[10fr_4fr_3fr] gap-10 pl-4 pr-4 rounded-b-[14px] h-[503px] shadow-xl">
                        <div className="border-r ">
                            <div className="mt-6 flex flex-col space-y-6">
                            <div>
                            Professional Certificate Program in Product Management
                            </div>
                            <div>
                            Professional Certificate Program in Product Management
                            </div>
                            <div>
                            Professional Certificate Program in Product Management
                            </div>
                            <div>
                            Professional Certificate Program in Product Management
                            </div>
                            </div>
                        </div>
                        <div className="border-r">
                        <div className="mt-6 flex flex-col space-y-6">
                            <div>
                                7,000
                            </div>
                            <div>
                                9,000
                            </div>
                            <div>
                                10,000
                            </div>
                            <div>
                                10,000
                            </div>
                            </div>
                        </div>
                        <div className="">
                        <div className="mt-6 flex flex-col space-y-6">
                            <div>
                                7,000
                            </div>
                            <div>
                                9,000
                            </div>
                            <div>
                                10,000
                            </div>
                            <div>
                                10,000
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}