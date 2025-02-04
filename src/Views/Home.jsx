import React from 'react'
import AmravatiImg from "../assets/amravati-banner.jpg"
import AmTemple from "../assets/amravati-mandir.jpeg"
import AmLocation from "../assets/amravati-temple.jpeg"
import Statue from "../assets/figure.jpeg"
import Fort from "../assets/fort.jpeg"
import GawilGadFort from "../assets/gawaligad-fort.jpg"
import ChikhHillStation from "../assets/chikhaldara-hill-station.jpg";
import MelghatForest from "../assets/MelghatTogerProject1-Chikhaldara.jpg"
import ChikhaFort  from "../assets/Gawilgarh.jpg"
import Card from "../Components/Card"



const BannerComponent = () => {
  return (
    <>
     <div className='w-full flex justify-center p-6'>
       <img src={AmravatiImg} className='border-[4px] border-blue-400 h-[600px] rounded-xl' alt='amravati-img'/>
     </div>
     </>
  )
}

export default BannerComponent;



export const AboutComponent = () => {

    return(
        <div>
         <div className='flex justify-evenly m-[10px] p-8 border-[4px] bg-violet-400 border-blue-300  rounded-xl'>
          <img src={AmTemple} className='h-[250px] w-[300px] rounded-xl' alt="" />
          <img src={AmLocation} className='h-[250px] w-[300px] rounded-xl' alt="" />
          <img src={Statue} className='h-[250px] w-[300px] rounded-xl' alt="" />
          <img src={Fort} className='h-[250px] w-[300px] rounded-xl' alt="" />
         </div>
         <div className='p-16 bg-violet-200'>

            <div className='p-4 border-[4px] bg-violet-300 border-blue-300 rounded-xl'>
            <h1 className='text-4xl font-bold'>About</h1>
            <p className='text-[20px] text-left'>Amravati, located in the Vidarbha region of Maharashtra, serves as the administrative center of both Amravati District and Amravati Division. The city is situated approximately 156 kilometers west of Nagpur and lies near the passes that separate the cotton-growing regions of the Purna and Wardha basins. It stands at an average elevation of 343 meters (1,125 feet) above sea level.</p>
            </div>
            
            <Card title= "Historical Background" paragraph= {`Historical Background" paragraph = "The city's ancient name is "Udumbravati," which evolved into "Umbravati" and eventually "Amravati." This name is believed to be derived from the historic Ambadevi Temple located within the city.`}/>

            <Card title= "Climate" paragraph= {`Amravati experiences a tropical wet and dry climate characterized by hot, dry summers from March to June, a monsoon season from July to October, and mild to cool winters from November to March. The highest recorded temperature was 49.1°C on May 25, 2013, while the lowest was 5.0°C on February 9, 1887`}/>

            <Card title= "Educational Institutions" paragraph= {`The city is home to Sant Gadge Baba Amravati University, established in 1983, along with several colleges affiliated with the University of Nagpur.`}/>

            <div className='my-6 p-4 border-[4px] bg-violet-300 border-blue-300 rounded-xl'>
            <h2 className='text-2xl font-bold'>Cultural and Religious Sites</h2>
            <h3 className='text-xl font-bold pt-4'>Ambadevi Temple:</h3>
            <p className='text-[18px] text-left'> A historic temple believed to be associated with the legend of Rukmini and Lord Krishna.</p>
            <h3 className='text-xl font-bold  pt-4'>Shri Ekviradevi Temple:</h3>
            <p className='text-[18px] text-left'> Situated near the Ambadevi Temple, this site holds religious significance for locals. </p>
            </div>


            <div className='my-6 p-4 border-[4px] bg-violet-300 border-blue-300 rounded-xl'>
            <h2 className='text-2xl font-bold'>Natural Attractions</h2>
            <h3 className='text-xl font-bold  pt-4'>Chikhaldara Hill Station:</h3>
            <p className='text-[18px] text-left'> Approximately 80 kilometers from Amravati, it is the only hill station in the Vidarbha region.</p>
            <h3 className='text-xl font-bold  pt-4'>Melghat Tiger Reserve:</h3>
            <p className='text-[18px] text-left'> A part of Project Tiger, this reserve is a haven for wildlife enthusiasts. </p>
            <div className='flex justify-evenly m-[5px] p-8'>
            <img src={GawilGadFort} className='h-[250px] w-[300px] rounded-xl'/>
            <img src={ChikhHillStation} className='h-[250px] w-[300px] rounded-xl'/>
            <img src={MelghatForest} className='h-[250px] w-[300px] rounded-xl'/>
            <img src={ChikhaFort} className='h-[250px] w-[300px] rounded-xl'/>
            </div>
            </div>
            
         </div>

        </div>
    )
}