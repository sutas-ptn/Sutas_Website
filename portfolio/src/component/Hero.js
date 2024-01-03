import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Typewriter from 'typewriter-effect';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Skill', href: '#Skill' },
  { name: 'My Project', href: '#Project' },
]

var prevScrollpos = window.scrollY;
      window.onscroll = function() {
      var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
          
        } else {
          document.getElementById("navbar").style.top = "-100px";
          
        }
        prevScrollpos = currentScrollPos;
      }





export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="absolute inset-x-0 top-0 z-50 ">
        <div className='bg-black navc lg:bg-inherit lg:shadow-none w-full fixed   ' id='navbar'>
          <nav className="flex items-center justify-between p-6 lg:px-8 " aria-label="Global">
            <div className="flex lg:flex-1 ">
              <a href="#Home" className="text-white colorglow -m-1.5 p-1.5  ">
                <span className="sr-only">Home</span>
                <div className='text-2xl  font-normal '><span className=' font-normal'>S</span>utas</div>
              </a>
            </div>
            <div className="flex lg:hidden ">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  "
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 " aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12 colorglow  ">
              {navigation.map((item) => (
                <a className="text-sm font-normal leading-6  " key={item.name} href={item.href} >
                  {item.name}
                </a>
              ))}
            </div>
            
          </nav>
        </div>
        
        <Dialog as="div" className="lg:hidden " open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 " />
          <Dialog.Panel className=" fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
            <div className="flex items-center justify-between  ">
              <a href="#Home"onClick={() => setMobileMenuOpen(false)} className="-m-1.5 p-1.5 colorglow ">
                <span className="sr-only">Home</span>
                <div className='text-2xl  font-normal '><span className=' font-normal'>S</span>utas</div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white "
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-white font-normal leading-7  hover:bg-orange-500 duration-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8" id='Home'>
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#f6920f] to-[#f6400f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='text-center'>
        <div className="mx-auto  max-w-3xl py-32 sm:py-48 lg:py-56 ">

            <p className=" text-xl leading-8  sm:text-3xl lg:text-3xl typing" id='typing' >
              Hello, my name is
            </p>
            <div className='flex justify-center gap-x-5'>
              <h1 className="mt-6 text-4xl   sm:text-5xl lg:text-6xl font-light "> 
                <span className='colorglow font-light '>Sutas </span>Pattanaworapongkul
              </h1>
            </div>
            
            <div className="text-xl mt-8 leading-8  sm:text-3xl lg:text-4xl">
                <Typewriter
                  options={{
                    strings: ['Welcome to My Portfolio Website','I want to be a Front-End Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
            </div>

            <div className="mt-10 flex items-center justify-center gap-x-16 ">
              <a href="https://www.facebook.com/nongteen.za.7" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill='white' className='h-16 w-16 fillglow hover:fill-orange-500 hover:scale-110 duration-300'>
                  <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                </svg>
              </a>
              <a href="https://www.instagram.com/sutas_teen?igsh=MTJwZG40ZHRwM2JqMQ==" target="_blank" rel="noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white' className='h-16 w-16 fillglow hover:fill-orange-500 hover:scale-110 duration-300'>
                  <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
                </svg>
              </a>
              <a href="mailto:sutas218@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill='white' className='h-16 w-16 fillglow hover:fill-orange-500 hover:scale-110 duration-300'>
                  <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"></path>
                </svg>
              </a>
            </div>
        </div>
        </div>
        
      </div>
      
    </div>
    
  )
}
