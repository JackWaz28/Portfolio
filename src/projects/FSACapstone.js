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

function FSACapstone() {
    

    return(
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 bg-slate-100 antialiased">
            <Sidebar/>
            <div className="flex flex-col flex-auto flex-shrink-0 bg-slate-400 md:ml-64">
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 p-4 gap-4">
                    <div className="ml-10 mt-5 col-span-2">
                        <p className="text-4xl font-bold text-center">GEEK HUNT</p>     
                        <div className="mt-10 h-auto w-auto">
                          <Swiper className="capstoneSwiper"
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                          >
                            <SwiperSlide><img src="geekhunt_landing.jpg"></img></SwiperSlide>
                            <SwiperSlide><img src="geekhunt_profiles.jpg"></img></SwiperSlide>
                            <SwiperSlide><img src="geekhunt_dashboard.jpg"></img></SwiperSlide>
                            <SwiperSlide><img src="geekhunt_messages.jpg"></img></SwiperSlide>
                            <SwiperSlide><img src="geekhunt_newProj.jpg"></img></SwiperSlide>
                            <SwiperSlide><img src="geekhunt_Calendar.jpg"></img></SwiperSlide>
                          </Swiper>  
                        </div>     
                      {/* <div className="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-center gap-8">
                      <a href="https://youtu.be/qj9yw-NfOZc">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="400"
                          height="400"
                          fill="currentColor"
                          className="text-xl hover text-[#b82a2a] dark:hover:text-white transition-colors duration-200 mt-5 justify-center ml-60"
                          viewBox="0 0 1792 1792"
                        >
                          <path  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
                          c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
                          C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
                          c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                        </svg>
                      </a>
                      </div>            */}
                        </div>
                    
                  <div className="col-span-3 ml-20 mr-20">
                    <h1 className="mt-20 mr-30 font-bold text-xl"> Fullstack Acadmy Capstone Project</h1>
                    <p className="mt-5 divide-y-8 mb-5"> Me and three other Fullstack Academy students worked together to design and build a social web app for users to connect and work with developers. This means that 
                      if you're looking for freelance work or if you're just looking to collaborate with other developers on a project this is the app for you. To enhance the capabilities of being able to connect with others 
                      we added chat functionality between users using the realtime cloud database in Firebase. Notifications used Firebase Cloud Functions, which is a framework that lets you automatically run backend code 
                      in response to events triggered by Firebase features and HTTPS requests. We also built a dashboard that can be used to organize users' projects and the ability to add others to a project. Users can also 
                      explore other public projects and leave comments on them. The app also has a calendar built in using the google calendar api, however full functionality of it is not working at the moment.  When we were 
                      deciding on what to use for our tech stack we wanted to focus on the reactivity and scalability of our app. That is how we landed on using the firebase realtime database alongside React. This was also a
                      chance for us to learn more about non SQL database structures. With firebase we were able to query the database extremely fast, which allowed us to create a messaging component without having to implement 
                      another technology.  </p>
                    <p className="border-b-2"> </p>
                    <div className="flex flex-col">
                      {/* <p className="mt-5">Relevant Skills: Concept Analysis and Selection Focued on Customer Needs, CAD, Solidworks, Team Management, Budgeting and Testing and Validation </p> */}
                      <ul className="mt-5 list-disc text-lg"> Technologies Used:
                        <li className='ml-6 text-lg'> React Hooks</li>
                        <li className='ml-6 text-lg'> Firebase/Firestore </li>
                        <li className='ml-6 text-lg'> Google Calendar API </li>
                        <li className='ml-6 text-lg'> Tailwind CSS  </li>
                      </ul>
                      <a className="mt-5 text-lg text-red-800 underline" href="https://youtu.be/qj9yw-NfOZc">Youtube Walktrhough</a>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
          </div>


    )
}

export default FSACapstone;