import { Link } from "react-router-dom"
import Footer from "./Footer"
import Card from "./card"
import { useAuth } from '../store/auth';

export default function Homecom() {
  const {isLoggedIn}=useAuth()
  const fontfamly={
    fontFamily: 'Concert One',
    fontWeight: 200,
    fontStyle: 'normal',
  }
    // const links = [
    //     { name: 'Open roles', to: '#' },
    //     { name: 'Internship program', to: '#' },
    //     { name: 'Our values', to: '#' },
    //     { name: 'Meet our leadership', to: '#' },
    //   ]
    //   const stats = [
    //     { name: 'Offices worldwide', value: '12' },
    //     { name: 'Full-time colleagues', value: '300+' },
    //     { name: 'Hours per week', value: '40' },
    //     { name: 'Paid time off', value: 'Unlimited' },
    //   ]
      const stats2 = [
        { id: 1, name: 'unique set can be create', value: '14 million+' },
        { id: 2, name: 'questions', value: '64+' },
        { id: 3, name: 'Topics', value: '8+' },
      ]
      
    return (
      <>
        <div className="mx-auto w-full rounded-b-3xl bg-[#679180] overflow-hidden ">
          <div className="relative isolate overflow-hidden  bg-[#678e91] bg-[#679180] px-6 pt-16 shadow-2xl  sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
              >
              <circle cx={512} cy={108} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.9" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  {/* <stop stopColor="#7775D6" /> */}
                  <stop stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto my-10 max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 style={fontfamly} className="text-3xl font-bold tracking-tight text-[#fff] sm:text-4xl">
                Let's play Test Your Knowledge and Improve Your Skills
                <br />
              </h2>
              <p className="mt-6 text-lg leading-8 text-white">
              Challenge yourself with this interactive quiz! Answer questions, get real-time feedback, and see how well you know your topics. Perfect for sharpening your skills while having fun.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              { !isLoggedIn? <Link
                  to="/Signup"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                  Get started
                </Link>
                :
                <Link
                  to="/quiz/all"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                  Get started
                </Link>
                }
                <Link to="/select" className="text-sm font-semibold leading-6 text-white">
                  Select Topic <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8 hidden md:block">
              <img
                className="absolute left-0 top-0 w-[37rem] max-w-none rounded-md bg-whte/5 rig-1 ing-whie/10"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/robot-say-hi-9580025-7746773.png?f=webp"
                alt="App screenshot"
                // width={1824}
                // height={1080}
                />
            </div>
          </div>
        </div>
        {/*  */}
        { !isLoggedIn?<>
        <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats2.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
</>:

     
         <Card/>

    }

        <hr className="my-6 font shadow-2xl border-gray-400 md:my-8 dark:border-gray-700"/>
        
     
                </>
    )
  }
  