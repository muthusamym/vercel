/* eslint-disable jsx-a11y/anchor-is-valid */
import ProjectImg1 from '../assets/ecommerce-websites.jpg';
import ProjectImg2 from '../assets/food-ecommerce.jpg';
import ProjectImg3 from '../assets/website-blog.jpg';

export default function Projects()
{
    const config = {
        projects :[
            {
                image:ProjectImg1,
                description:' A ecommerce website,buit with MERN Stack ',
                link:'https://github.com/gitdagray/nodejs_web_server'
            },
            {
                image:ProjectImg2,
                description:' A Food website,buit with MERN Stack',
                link:'https://github.com/gitdagray/nodejs_web_server'
            },
            {
                image:ProjectImg3,
                description:'A Website Blo website,buit with Html',
                link:'https://github.com/gitdagray/nodejs_web_server'
            }
        ]
    }
    return <section id="projects" className='flex flex-col py-20 px-5 justify-center bg-secondary text-white flex-col'>
            <div className='w-full'>
                <div className='flex flex-col px-10 py-5'>
                    <h1 className='text-4xl border-b-4 border-secondary mb-4 w-[150px] font-bold'>Projects</h1>
               <p> Bulit with projects and react and tailwindcss to esatablish the on web server platform</p>
                </div>
            
            </div>
            <div className='w-full'>
                <div className='flex flex-col md:flex-row px-10 gap-5'>                   
               {config.projects.map((project)=> (
                <div className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} alt=''/>
                             <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                 <div className='flex justify-center'>
                                 <a className='btn' href={project.link} alt='' rel='noreferrer' target='_blank' >View Project</a>   
                             </div>
                            </div>
                           
                    </div>
                    
                ))}
                           
                </div>           
            </div>
    </section>
}