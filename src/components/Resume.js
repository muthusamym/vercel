/* eslint-disable jsx-a11y/anchor-is-valid */
import ResumeImg from '../assets/resume.jpg';
export default function Resume()
{
    const config = {
        samplepdf :'https://pdfobject.com/pdf/sample.pdf'
    }
    return <section id="resume" className='flex flex-col md:flex-row bg-primary px-5'>
        <div className="md:w-1/2 py-5 flex justify-end md:justify-center">
            <img className='w-[300px]' src={ResumeImg} alt=''/>
        </div>
        <div className="md:w-1/2 flex justify-center">
        <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl border-b-4 border-primary mb-4 w-[170px] font-bold'>Resume</h1>
            <p className='pb-6'>you can viw my resume and click here <a className='btn' href={config.samplepdf}>Download</a></p>
            
        </div>         
        </div>

    </section>
}