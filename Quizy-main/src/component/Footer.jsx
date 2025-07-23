import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import { Link,useLocation } from 'react-router-dom';

 const Footer=()=>{
    const location=useLocation().pathname
    const subject=location.slice(6)
    return (<>
{location!==`/quiz/${subject}` && location!=="/select" && <footer footer className="bg-white shadow-2xl dark:bg-gray-900">
 <div className="container p-6 pt-9 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Our support team is here to <br/>assist you anytime</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address"/>
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-[#19444a] rounded-lg hover:bg-[#19444ae6] focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Contact Us
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Link</p>

             <div className="flex flex-col items-start mt-5 space-y-2">
                    <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Dashboard</Link>
                    {/* <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Loan</Link> */}
                    <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">About</Link>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Industries</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Feedback</Link>
                    <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Term & conditions</Link>
                    <Link to="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">FAQ</Link>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200  md:my-4 dark:border-gray-700"/>
        
        <div className="flex items-center justify-between">
          
            <div></div>
            <div className="flex -mx-2">
                <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                <FaLinkedinIn className="w-5 h-5 fill-current" />
                </Link>

                <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                <FaSquareGithub className="w-5 h-5 fill-current"/>
                </Link>

                <Link to="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                <FaFacebookF className="w-5 h-5 fill-current"/>
                     
                </Link>
            </div>
        </div>
    </div>
</footer>}
</>

)}
export default Footer;