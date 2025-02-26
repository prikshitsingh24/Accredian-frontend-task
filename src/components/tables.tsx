import arrowLogo from "../assets/arrowLogo.png"
import arrowBlackLogo from "../assets/arrowBlackLogo.png"
import downGrayArrowLogo from "../assets/downGrayArrowLogo.png"
import hatLogo from "../assets/hatLogo.png";
import { CustomSwitch } from "./switch";
export default function Tables(){
    return(
        <div className="w-full font-sans mt-10">
            <div className="flex justify-end mr-32 font-sanspro text-[20px] items-center">
                Enrolled 
                <CustomSwitch></CustomSwitch>
            </div>
            <div className="flex flex-row w-full space-x-10 mt-2">
                <div className="w-[270px] h-[572px] flex flex-col shadow-xl rounded-b-[14px]">
                    <div className="rounded-t-[8px] font-sanspro-semibold bg-(--btn-blue) text-white w-full h-[50px] flex items-center text-[18px] pl-2 justify-between pr-2">
                        ALL PROGRAMS
                        <div>
                            <img src={arrowLogo} alt="" width={16} height={16}/>
                        </div>
                    </div>
                    <div className="h-[522px] p-2 flex flex-col space-y-2 w-full">
                    <div className="h-[43px]">
                    <div className="w-full h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
                        PRODUCT MANAGEMENT
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[47px]">
                    <div className="w-full h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
                        STRATEGY & LEADERSHIP
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
                        BUSINESS MANAGEMENT
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
                        FINTECH
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
                        SENIOR MANAGEMENT
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                        </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
                        DATA SCIENCE
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full  h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
                        DIGITAL TRANSFORMATION
                        <div>
                            <img src={arrowBlackLogo} alt="" width={11.25} height={16}/>
                        </div>
                    </div>
                    </div>
                    <hr />
                    <div className="h-[54px]">
                    <div className="w-full h-[50px] font-sanspro-semibold flex items-center text-[18px] justify-between ">
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
                    <div className="w-full grid grid-cols-[10fr_4fr_3fr] gap-x-10 pl-4 pr-4 rounded-b-[14px] h-[503px] shadow-xl">
                            <div className="border-r ">
                                <div className="w-[350px] h-full flex items-center justify-between font-sanspro">
                                    <img src={hatLogo} alt="" className="mb-5"/>
                                    <div className="ml-2">Professional Certificate Program in Product Management</div>
                                </div>
                            </div>
                            <div className="border-r font-sanspro flex items-center">
                                7,000
                            </div>
                            <div className="font-sanspro flex items-center">
                                9,000
                            </div>
                            <div className="border-r ">
                                <div className="w-[350px] h-full flex items-center justify-between font-sanspro">
                                    <img src={hatLogo} alt="" className="mb-5"/>
                                    <div className="ml-2">Professional Certificate Program in Strategic Product Management</div>
                                </div>
                            </div>
                            <div className="border-r font-sanspro flex items-center">
                                9,000
                            </div>
                            <div className="font-sanspro flex items-center">
                                11,000
                            </div>
                            <div className="border-r ">
                                <div className="w-[350px] h-full justify-between flex items-center font-sanspro">
                                    <img src={hatLogo} alt="" className="mb-5"/>
                                    <div className="ml-2">Professional Certificate Program in Data Driven Product Management</div>
                                </div>
                            </div>
                            <div className="border-r font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="border-r ">
                                <div className="w-[400px] h-full justify-between flex items-center font-sanspro">
                                <img src={hatLogo} alt="" className="mb-5"/>
                                <div className="ml-2"> Professional Certificate Program in Product Management and Digital Transformation</div>
                                </div>
                            </div>
                            <div className="border-r font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="border-r ">
                                <div className="w-[300px] h-full justify-between flex items-center font-sanspro">
                                    <img src={hatLogo} alt="" className="mb-5"/>
                                    <div className="ml-2">Executive Program in Product Management</div>
                                </div>
                            </div>
                            <div className="border-r font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="border-r ">
                                <div className="w-[300px] h-full flex items-center font-sanspro">
                                    <img src={hatLogo} alt="" className="mb-5"/>
                                    <div className="ml-2">Advanced Certification in Product Management</div>
                                </div>
                            </div>
                            <div className="border-r font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="font-sanspro flex items-center">
                                10,000
                            </div>
                            <div className="border-r ">
                                <div className="w-[400px] justify-between h-full flex items-center font-sanspro">
                                    <img src={hatLogo} alt="" className="mb-5"/>
                                    <div className="ml-2">Executive Program in Product Management and Project Management</div>
                                </div>
                            </div>
                            <div className="border-r font-sanspro flex items-center"> 
                                10,000
                            </div>
                            <div className="font-sanspro flex items-center">
                                10,000
                            </div>
                    </div>
                </div>
            </div>
           <div className="flex justify-end mr-32 mt-5">
                <div className="h-[41px] w-[174.66px] flex justify-center items-center border border-(--border-gray) rounded-[8px] text-(--text-disable)">
                Show more <div><img src={downGrayArrowLogo} alt="" className="ml-4 mt-1" width={15} height={9}/></div>
                </div>
            </div>
        </div>
    )
}