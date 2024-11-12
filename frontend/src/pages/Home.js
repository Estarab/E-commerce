import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpodes"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular's Watches"}/>

      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <VerticalCardProduct category={"Mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera & Photography"}/>
      <VerticalCardProduct category={"earphones"} heading={"Wired Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Bluetooth Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home


// import React from 'react'
// import CategoryList from '../components/CategoryList'
// import BannerProduct from '../components/BannerProduct'
// import HorizontalCardProduct from '../components/HorizontalCardProduct'
// import VerticalCardProduct from '../components/VerticalCardProduct'

// const Home = () => {
//   return (
//     <div>
//       <CategoryList/>
//       <BannerProduct/>

//       <HorizontalCardProduct category={"ashok"} heading={"Ashok Trees"}/>
//       <HorizontalCardProduct category={"cuban royal palms"} heading={"Cuban Royal Palms"}/>

//       <VerticalCardProduct category={"cornifers"} heading={"Cornifers"}/>
//       <VerticalCardProduct category={"blossoms"} heading={"Blossoms"}/>
//       <VerticalCardProduct category={"cactus"} heading={"Cactus"}/>
//       <VerticalCardProduct category={"trees"} heading={"Trees"}/>
//       <VerticalCardProduct category={"ashok"} heading={"Ashok"}/>
//       <VerticalCardProduct category={"swanes gold"} heading={"Swanes Gold"}/>
//       <VerticalCardProduct category={"palm trees"} heading={"Palm Trees"}/>
//       <VerticalCardProduct category={"roses"} heading={"Roses"}/>
//     </div>
//   )
// }

// export default Home