import {act, useEffect, useState} from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'
import { FaMessage } from 'react-icons/fa6'
import HeadphoneData from "../data/mockData"
import {motion , AnimatePresence, easeInOut} from "framer-motion"
import SlideRight from '../utils/animation'


const Hero = () => {
    
    const [activeData, setActiveDate] = useState(HeadphoneData[0])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(()=>{
        setActiveDate(HeadphoneData[currentIndex])
        const interval = setInterval(()=>{
            setCurrentIndex((previndex) => (previndex +1) % HeadphoneData.length)
        },3000)
       
        return () =>  clearInterval(interval)
        
    },[currentIndex])

  return (
    <motion.div
    initial={{
        backgroundImage : `radial-gradient(circle, ${activeData.bgColor}0%, ${activeData.bgColor}0%)`
    }}
    animate={{
        backgroundImage : `radial-gradient(circle, ${activeData.bgColor}aa 0%, ${activeData.bgColor} 70%)`
    }}
    transition={{duration: 0.8}}
     className="text-white">
        <main className='overflow-x-hidden container grid grid-cols-1 lg:grid-cols-2 h-screen xl:h-[700px] relative'>
            {/* headphoneinfo section */}
            <div className='flex flex-col justify-center py-14 md:py-0  xl:max-w-[500px] order-2 lg:order-1'> 
                <div className='space-y-5 md:space-y-7 text-center lg:text-left'>
                    <AnimatePresence mode='wait'>
                        <motion.h1
                        key={activeData.id}
                        variants={SlideRight(0.2)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='text-4xl md:text-7xl lg:text-5xl xl:text-6xl font-bold'>{activeData.title}</motion.h1>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.p 
                        key={activeData.id}
                        variants={SlideRight(0.4)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='text-sm leading-loose text-white/60'>{activeData.subtitle}</motion.p>
                    </AnimatePresence>
                    <AnimatePresence mode='wait'>
                        <motion.p 
                        key={activeData.id}
                        variants={SlideRight(0.6)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='text-3xl lg:text-4xl xl:text-5xl font-bold'>{activeData.price}</motion.p>
                    </AnimatePresence>
                    {/* social icons section  */}
                    <AnimatePresence mode='wait'>
                        <motion.div 
                        key={activeData.id}
                        variants={SlideRight(0.8)}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        className='flex items-center justify-center xl:justify-start gap-4  text-3xl'>
                            <FaInstagram className='cursor-pointer border rounded-full p-[6px]'/>
                            <FaFacebook className='cursor-pointer border rounded-full p-[6px]' />
                            <FaTwitter  className='cursor-pointer border rounded-full p-[6px]' />
                        </motion.div>
                    </AnimatePresence>
                </div> 
            </div>
            {/* headphone image section */}
            <div className='flex flex-col pt-16 sm:pt-0 justify-center items-center order-1 lg:order-2 relative'>
                <AnimatePresence mode='wait'>
                <motion.img 
                key={activeData.id}
                initial={{opacity : 0, x : 100}}
                animate={{opacity: 1, x:0}}
                transition={{duration : 0.4, ease: easeInOut, delay : 0}}
                exit={{opacity:0, x :-100}}
                src={activeData.image} alt={activeData.title} className='w-[400px] md:w-[500px] xl:w-[600px] relative z-10'/>
                </AnimatePresence>
           
                <div className=' text-[100px] sm:text-[170px] md:text-[200px] lg:text-[280px] absolute  top-[7%] lg:-top-[9%]   lg:left-0 lg:-translate-x-1/2 z-0 font-Poppins bg-gradient-to-t from-white/5 to-white/70 bg-clip-text text-transparent font-extrabold select-none'>
    AirPods
</div>
            </div>
        </main>
    </motion.div>
  )
}

export default Hero
