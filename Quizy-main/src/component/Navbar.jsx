import { Fragment } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth';
import { Link,useLocation } from 'react-router-dom';



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const fontfamly={
  fontFamily: 'Concert One',
  fontWeight: 200,
  fontStyle: 'normal',
}

export default function Navbar() {
  const {isLoggedIn, user}=useAuth();
  const navigation = [
    { name: 'Dashboard', href: '/', current: true },
    { name: 'About', href: '/About', current: false },
    { name: 'FeedBack', href: 'FeedBack', current: false },
  ]
  const location=useLocation().pathname
  const subject=location.slice(6)
  return (<>
    {location!==`/quiz/${subject}` && location!=="/select" &&  <Disclosure as="nav" style={fontfamly} className="bg-gray800 py-1 font-['Concert One'] bg-[#19444a]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white  hover:text-[#ffffff4a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-shrink-0 sm:mt-2 absolute left-[35%]  sm:relative sm:left-0 items-center">
                  <img
                    className="h-[45px] mx-0 my-auto sm:h-[50px] w-auto"
                    src="./image/quiz-multicolor.png"
                    alt="Your Company"
                  />
                </div>
              <div className="flex flex-1 items-center font-['Concert One'] justify-center sm:items-stretch sm:justify-start">
             
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? ' hover:text-[#ffffff85] text-white' : 'text-white  hover:text-[#ffffff85] ',
                          'rounded-md px-3 py-2 text-2xl space-x-0 font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
{ isLoggedIn ? (<>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative  text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                 <span className=' text-2xl hidden sm:block text-white font-semibold'>

           {user.Fname}
                 </span>
                  </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HDxAPEBAQDxMOEA8QEBINDw8QDxAPFREWFhYSFhMYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAABQEEBgMCB//EADIQAQABAgMEBwgDAQEAAAAAAAABAgMEESEFMVFxEhMyQWGRsSJCcoGhwdHhUqLwYiP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/awAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjc0cRtKmjSiOlPH3f2DfYmckK7jLl3fVMeFOkPCZz8QdJE5suajR62sVctbqp5TrH1B0AnYfacTpXGXjG75woU1RVGcTnE98bgZAAAAAAAAAAAAAAAAAAAAYqqimM50iN+bKVtXE9KerjdHa8Z4fIHjjcbOI0jSnh3z4z+GoAAAAADYwmKqw08aZ3x944S1wHR2rkXYiqNYl9ouzsT1NWU9mr6T3StAAAAAAAAAAAAAAAAAAA879zqaaqv4xn8+5z0znrO+d/NX2tX0bcR/KqPpqjgAAAAAAAAL2Bu9dbpnvjSecf6EFU2NV26eU/b8ApAAAAAAAAAAAAAAAAAAnbZ7NHxT6JSxtanpW8/wCNUT56I4AAAAAAAACjsbtV/DHqnKmxqdK6uUeWv3BSAAAAAAAAAAAAAAAAAB8XrfW0zT/KMnO1RNMzE6TGk83Spe1cNlPWRunteE8QTQAAAAAAAF/BWupt0x3755ym7Nw3XVdKezTPnVwWQAAAAAAAAAAAAAAAAAAGJjpaTrnxYrriiM5mIjjOjxs423eq6MTyzjLPkCbjcDNj2qdafOaefh4tN0zSxOzqbutPsT/Wfl3AjDZu4G5b93P4dXhNE074mOcSD5GYpme6flEve3g7lzdTMfFp6g12zg8JViZ4U98/aOLdw+zIp1rnpeEbv234jLSNMuAMW6ItxFMRlEPp4YjF0YeYiZ1nujWYjjL0tXabsZ0zEx4A+wAAAAAAAAAAAAAAAGni8fTZ0p9qr6Rza2Ox/SzponTvq48k4HpevVXpzqnP0jlDzAG/hdpTRpX7Ucfe/anZv0XuzVE+vk51mJyB0og28bct+9M/FlPq9o2pcjuon5T+QWBHnalzhR5T+XlXjrtfvZfDEQC1cu02ozqmI5p2J2nnpbjL/qd/yhOmZq1mc+erAM1TNU5zOczvmd8vq3cm1OdMzE+D4AVsJtGK9K8qZ4+7P4UHMt3A46bPs1a0/Wn9AsjETFUZxrE6wyAAAAAAAAAAAlbSxnSzopnT3pjv8OTY2liupjox2qo8qeKMAAAAAAAAAAAAAAAADd2fjOono1dmf6zx5LDmlTZWKz/857uzy4ApAAAAAAAAPm5XFuJqndEZy+k3a97KIojv1n7AnXrs3qpqnfP08HwAAAAAAAAAAAAAAAAADNNU0TExpMawwA6HDXov0xVx3+E98PVI2Te6NU0Tuq1j4o/SuAAAAAAA57FXeurqq4zpyjcuYqvq6Kp4ROXOdHPAAAAAAAAAAAAAAAAAAAAA+qK5tzFUb4mJh0VNXSiJjvjP5ObXNm19O1T/AM50+X+gG0AAAAADS2tVlby41RH3+yMrbYn2afin0SQAAAAAAAAAAAAAAAAAAAAFXY1WlceMT5x+kpR2NOtfKPUFUAAAAAE7bPZo5z6JQAAAAAAAAAAAAAAAAAAAAAKGxu1V8MeoArAAAA//2Q=="
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/profile"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </MenuItem>
                      {/* <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="#"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </Link>
                        )}
                      </MenuItem> */}
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/logout"
                            className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </Link>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
</>)
:(<>          

    <div className="relative inline-flex  group">
        {/* <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#3a3c4f] to-[#bec6ec] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div> */}
        <Link to="/login"  style={fontfamly} title="Get quote now"
            className="relative inline-flex items-center justify-center px-9 py-[4px] text-lg font-bold text-[#fff] transition-all duration-200 bg-[#00afc6] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-[#00c7e1] border-b-4 border-[#20666f] focus:ring-gray-900 text-xl" 
            role="button">Login 
        </Link>
    </div>

    </>) }
            </div>
          </div>
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
          
        </>
      )}
    </Disclosure>} </>
  )
}
