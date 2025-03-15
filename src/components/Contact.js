/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Contact()
{
    const config = {
        email:'muthu@gmail.com',
        phone:'9494843222'
    }
    return <section id="contact" className='flex flex-col bg-secondary px-5 py-32 text-white'>
        <div className="flex flex-col items-center">   
            <h1 className='text-4xl border-b-4 border-primary mb-4 w-[170px] font-bold border-secondary'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail contact me</p> 
            <p className="py-2"><span className="font-bold">Email : {config.email}</span></p>   
            <p className="py-2"><span className="font-bold">Phone : {config.phone}</span></p>        
        </div>         

    </section>
}