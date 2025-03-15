/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroImg  from '../assets/hero.png'
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from 'react-icons/ai'

export default function Hero()
{
    const config = {
        subtitle:"i am full stack developer",
        social :{
            twitter:'https://twitter.com',
              facebook:'https://twitter.com',
                linkedIn:'https://twitter.com'
        }
    }

    return <section id="hero" className='flex flex-col md:flex-row px-5 py-32 justify-center bg-secondary'>
        <div className='md:w-1/2 flex flex-col' >
            <h1 className='text-white text-4xl font-hero-font'>Hi,I am <span className='text-black'> Muthu Dot</span> 
            <p className='text-2xl'> {config.subtitle} </p>
            </h1>
            <div className='flex py-5'>
            <a href={config.social.twitter} alt='' className="pr-5 hover:text-white"><AiOutlineTwitter  size={40}/></a>
            <a href={config.social.facebook} alt='' className="pr-5 hover:text-white" ><AiOutlineFacebook size={40} /></a>
            <a href={config.social.linkedIn} alt=''className="pr-5 hover:text-white" ><AiOutlineLinkedin size={40} /></a>
        </div>
        </div>  
        
        <img alt='' className='md:w-1/3' src={HeroImg} />       
    </section>
}