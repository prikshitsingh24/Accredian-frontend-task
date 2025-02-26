import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import crossLogo from "../assets/crossLogo.png";
import IsPhone from "./isPhone";

interface Course{
    courseId:string,
    courseName:string
    courseDescription:string,
    createdAt:Date
}

interface Error{
    isError:boolean,
    errorMsg?:string
}

export default function ReferralForm({ formStatus }: { formStatus: () => void }) {
    const isPhone = IsPhone();
    const [courses, setCourses] = useState<Course[]>([]);
    const [refereeEmail, setRefereeEmail] = useState("");
    const [refereeName, setRefereeName] = useState("");
    const [referrerEmail, setReferrerEmail] = useState("");
    const [referrerName, setReferrerName] = useState("");
    const [selectedCourseId, setSelectedCourseId] = useState<string>("");
    const [selectedCourseName, setSelectedCourseName] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true); 
    const [disable,setDisable] = useState<boolean>(false);
    const [info,setInfo] = useState<boolean>(false);
    const [error,setError] = useState<Error>({isError:false})

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/course/getAllCourses`);
                const data = await response.json();
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const course = e.target.value.split("?")
        setSelectedCourseId(course[0]);
        setSelectedCourseName(course[1]);
    };

    // Function to handle changes in input fields
    const handleRefereeEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefereeEmail(e.target.value);
    };

    const handleRefereeNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRefereeName(e.target.value);
    };

    const handleReferrerEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReferrerEmail(e.target.value);
    };

    const handleReferrerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReferrerName(e.target.value);
    };

    const handleSubmit = async() => {
        setDisable(true)
        if (!refereeEmail || !refereeName || !referrerEmail || !referrerName || !selectedCourseId || !selectedCourseName){
            setError({isError:true,errorMsg:"Please Fill all the details!"})
            setDisable(false);
            return
        }

        const response = await fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/api/referral/createReferral`,{
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                referrerName,
                referrerEmail,
                refereeName,
                refereeEmail,
                courseId:selectedCourseId,
                courseName:selectedCourseName
            })
        })
        
        if (response.status == 201){
            setRefereeEmail("");
            setRefereeName("");
            setReferrerEmail("");
            setReferrerName("");
            setSelectedCourseId(""); // Reset to an empty or initial value
            setSelectedCourseName("");
            setDisable(false);
            setError({isError:false})
            setInfo(true)
        }else{
            setDisable(false);
            setError({isError:true,errorMsg:"Couldn't Send the Referral Please Try Again!"})
        }
    };

   if (isPhone){
    return (
        <div className="bg-white w-full p-4 flex flex-col items-center rounded-xl shadow-2xl  relative">
            <div className="absolute right-4 top-4 cursor-pointer" onClick={formStatus}>
                <img src={crossLogo} alt="Close" width={24} height={24} />
            </div>
            <div className="flex justify-center mt-4 text-[26.77px] font-semibold">
                Referral <span className="text-(--text-blue) ml-2">Form</span>
            </div>
            {info && (
                <div className="mt-5 text-green-500 border rounded-[4px] p-2">Referral Sent Successfully!</div>
            )}
            {error.isError && (
               <div className="mt-5 text-red-500 border rounded-[4px] p-2">{error.errorMsg}</div>
            )}
            <div className="grid grid-cols-1 gap-y-4 mt-5">
            <div>
                    <div className="text-[14px]">Referrer Name</div>
                    <input
                        type="text"
                        className="border rounded-[4px] p-2 outline-none"
                        value={referrerName}
                        onChange={handleReferrerNameChange}
                    />
                </div>
                <div>
                    <div className="text-[14px]">Referrer Email</div>
                    <input
                        type="email"
                        className="border rounded-[4px] p-2 outline-none"
                        value={referrerEmail}
                        onChange={handleReferrerEmailChange}
                    />
                </div>
                <div>
                    <div className="text-[14px]">Courses</div>
                    {/* Replace input with select dropdown */}
                    {loading ? (
                          <div>
                          <CircularProgress size="20px" />
                      </div>
                    ) : (
                        <select
                            className="border rounded-[4px]  p-2 pr-4 outline-none"
                            value={`${selectedCourseId}?${selectedCourseName}`}
                            onChange={handleCourseChange}
                        >
                            <option value="">Select a Course</option>
                            {courses.length>0 && courses.map((course, index) => (
                                <option key={index} value={`${course.courseId}?${course.courseName}`}>
                                    {course.courseName}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <div></div>
                <div>
                    <div className="text-[14px]">Referee Name</div>
                    <input
                        type="text"
                        className="border rounded-[4px] p-2 outline-none"
                        value={refereeName}
                        onChange={handleRefereeNameChange}
                    />
                </div>
                <div>
                    <div className="text-[14px]">Referee Email</div>
                    <input
                        type="email"
                        className="border rounded-[4px] p-2 outline-none"
                        value={refereeEmail}
                        onChange={handleRefereeEmailChange}
                    />
                </div>
            </div>
            <div className={`w-[192px] h-[54px] flex justify-center items-center rounded-[8px] text-white mt-10 ${disable?'bg-gray-400':'bg-(--btn-blue)'} cursor-pointer`} onClick={disable?()=>{}:handleSubmit}>
                Refer Now
            </div>
        </div>
    );
   }

   else{
    return (
        <div className="bg-white w-1/3 h-[550px] flex flex-col items-center rounded-xl shadow-2xl p-2 relative">
            <div className="absolute right-4 top-4 cursor-pointer" onClick={formStatus}>
                <img src={crossLogo} alt="Close" width={24} height={24} />
            </div>
            <div className="flex justify-center mt-4 text-[26.77px] font-semibold">
                Referral <span className="text-(--text-blue) ml-2">Form</span>
            </div>
            {info && (
                <div className="mt-5 text-green-500 border rounded-[4px] p-2">Referral Sent Successfully!</div>
            )}
            {error.isError && (
               <div className="mt-5 text-red-500 border rounded-[4px] p-2">{error.errorMsg}</div>
            )}
            <div className="grid grid-cols-2 gap-10 mt-5">
            <div>
                    <div className="text-[14px]">Referrer Name</div>
                    <input
                        type="text"
                        className="border rounded-[4px] p-2 outline-none"
                        value={referrerName}
                        onChange={handleReferrerNameChange}
                    />
                </div>
                <div>
                    <div className="text-[14px]">Referrer Email</div>
                    <input
                        type="email"
                        className="border rounded-[4px] p-2 outline-none"
                        value={referrerEmail}
                        onChange={handleReferrerEmailChange}
                    />
                </div>
                <div>
                    <div className="text-[14px]">Courses</div>
                    {/* Replace input with select dropdown */}
                    {loading ? (
                        <div>
                            <CircularProgress size="20px" />
                        </div>
                    ) : (
                        <select
                            className="border rounded-[4px] w-[240px] p-2 pr-4 outline-none"
                            value={`${selectedCourseId}?${selectedCourseName}`}
                            onChange={handleCourseChange}
                        >
                            <option value="">Select a Course</option>
                            {courses.length>0 && courses.map((course, index) => (
                                <option key={index} value={`${course.courseId}?${course.courseName}`}>
                                    {course.courseName}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
                <div></div>
                <div>
                    <div className="text-[14px]">Referee Name</div>
                    <input
                        type="text"
                        className="border rounded-[4px] p-2 outline-none"
                        value={refereeName}
                        onChange={handleRefereeNameChange}
                    />
                </div>
                <div>
                    <div className="text-[14px]">Referee Email</div>
                    <input
                        type="email"
                        className="border rounded-[4px] p-2 outline-none"
                        value={refereeEmail}
                        onChange={handleRefereeEmailChange}
                    />
                </div>
            </div>
            <div className={`w-[192px] h-[54px] flex justify-center items-center rounded-[8px] text-white mt-10 ${disable?'bg-gray-400':'bg-(--btn-blue)'} cursor-pointer`} onClick={disable?()=>{}:handleSubmit}>
                Refer Now
            </div>
        </div>
    );
   }
}
