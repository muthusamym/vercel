/* eslint-disable jsx-a11y/anchor-is-valid */
import AboutImg from '../assets/about.png';
export default function About()
{
    return <section id="about" className='flex flex-col md:flex-row bg-primary px-5'>
        <div className="w-1/2 py-5">
            <img src={AboutImg} alt=''/>
        </div>
        <div className="w-1/2 flex justify-center">
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-4 w-[170px] font-bold'>About Me</h1>
            <p className='pb-6'>Hi, i am about section, i m full stack web developer , i built beautiful website with react and tailwindcss </p>
            <p className='pb-5'>Iam proficicent skills react,redux, and Toolkit and other css jquery </p>
            <p className='pb-5'>I am proficicent skills  express and mongodb </p>
        </div>         
        </div>

    </section>
}