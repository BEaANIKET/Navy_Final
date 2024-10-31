

import HomeCarouselEl from "../../ElementsEl/HomepageEl/HomeSwiperEl"
// import HomeTestimonial from "../../ElementsEl/HomepageEl/HomeTestimonialEl"
import TrainingProgramsSection from "../../ElementsEl/HomepageEl/HomeTraingEl"
import TrainingVacanciesSection from "../../ElementsEl/HomepageEl/HomeVacancies"
import LayoutEl from "../../Shared/LayoutEl"


const Homepage=()=>{
    const displaay=(
        <>
         <LayoutEl>
            <HomeCarouselEl/>
            <TrainingProgramsSection/>
            <TrainingVacanciesSection/>
            {/* <HomeTestimonial/>/- */}
         </LayoutEl>
        
        </>
    )
    return displaay
}
export default Homepage