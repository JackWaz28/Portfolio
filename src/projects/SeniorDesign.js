import Sidebar from '../sideBar/Sidebar'
import "../style.css"  
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SeniorDesign() {
    

    return(
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-slate-100 antialiased">
            <Sidebar/>
            <div className="flex flex-col flex-auto flex-shrink-0 bg-slate-400 md:ml-64">
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 p-4 gap-4">
                    <div className="ml-20">
                        <p className="text-4xl font-bold text-center">Ultra-Tall Synthetic Tree</p>     
                        <div className="mt-5 h-1/4 w-auto">
                        <Swiper
                          modules={[Navigation, Pagination, Scrollbar, A11y]}
                          spaceBetween={50}
                          slidesPerView={1}
                          navigation
                          pagination={{ clickable: true }}
                          onSwiper={(swiper) => console.log(swiper)}
                          onSlideChange={() => console.log('slide change')}
                        >
                          <SwiperSlide><img src="charging_system.jpg"></img></SwiperSlide>
                          <SwiperSlide><img src="solar3.jpg"></img></SwiperSlide>
                          <SwiperSlide><img src="tubes.jpg"></img></SwiperSlide>
                          <SwiperSlide><img src="top_of_tubes.jpg"></img></SwiperSlide>
                          <SwiperSlide><img src="team_selfie.jpg"></img></SwiperSlide>
                        </Swiper>     
                        </div>                
                      </div>
                  <div className="col-span-2 ml-20 mr-20">
                    <h1 className="mt-20 mr-30 font-bold text-xl"> Virginia Tech Senior Design Project</h1>
                    <p className="mt-5 divide-y-8 mb-5"> Me and six other Virginia Tech Seniors seeked to build a synthetic tree, not only to replicate this natural process, but also to show its potential 
                     for practical applications, such as pumped-storage hydropower. This project built on a 10-foot tall synthetic tree project completed the previous year, which proved
                     that natural tree processes of trtansporting water upwards can be created synthetically. The next step towards demonstrating the practicality of synthetic trees is to prove scalability; 
                     therefore, we created a 50-foot or taller synthetic tree, attached to and supported by a building. Since this is the largest synthetic tree ever built, the team 
                     had to solve unique design challenges, such as an initial tree saturation and construction of a new solar concentrator. We designed and built a solar concentrator to heat the leaf to increase 
                     the evaporation rate at the top of the tree. We also create a two component charging system to distrubute the water into the seven tubes and push the water up 50 feet. 
                     After the design was finalized, the team completed the build of the tree and performed testing during the Spring of 2021. Finally we completed a </p>
                    <p className="border-b-2"> </p>
                    <div className="flex flex-col">
                      {/* <p className="mt-5">Relevant Skills: Concept Analysis and Selection Focued on Customer Needs, CAD, Solidworks, Team Management, Budgeting and Testing and Validation </p> */}
                      <ul className="mt-5 list-disc"> Relevant Skills:
                        <li className='ml-6'> CAD and SOLIDWORKS</li>
                        <li className='ml-6'> Fluid Mechanics </li>
                        <li className='ml-6'> Concept Generation and Selection </li>
                        <li className='ml-6'> Customer Needs Analysis </li>
                        <li className='ml-6'> Testing and Validation </li>
                        <li className='ml-6'> Team Management </li>
                        <li className='ml-6'> Budgeting </li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
              </div>
          </div>


    )
}

export default SeniorDesign;