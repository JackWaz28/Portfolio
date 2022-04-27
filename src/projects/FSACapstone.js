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
                    <div className="ml-10 col-span-2">
                        <p className="text-4xl font-bold text-center">GEEK HUNT</p>     
                        <div className="mt-5 h-auto w-auto">
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
                      <ul className="mt-5 list-disc"> Technologies Used:
                        <li className='ml-6'> React Hooks</li>
                        <li className='ml-6'> Firebase/Firestore </li>
                        <li className='ml-6'> Google Calendar API </li>
                        <li className='ml-6'> Tailwind CSS  </li>
                      </ul>
                      <span>Youtube Video: <a href="https://youtu.be/qj9yw-NfOZc">links</a></span>
                    </div>
                    
                  </div>
                </div>
              </div>
          </div>


    )
}

export default FSACapstone;