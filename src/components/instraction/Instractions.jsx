import Link from 'next/link';
import React from 'react';

const Instractions = () => {
    
    return (
        <div className='pt-20 pb-10'>
            <h1 className='text-4xl text-center font-bold  pb-5'>Just follow the steps and make <br /> <span className=' text-green-600'> you time easy</span> </h1>

            <div className='pt-10'>
                <h1 className='text-3xl border-2 mx-[600px] border-red-700 text-center mb-10'>Stap-1</h1>
                <p className='text-center'>  If you want to use our website or Softwere you have to <span className='font-bold-bold text-green-500'><Link href="/signup">signup </Link></span> signup first . You can not take any type of benefit without sign up . We give the best service . </p>
            </div>
            <div className='pt-10'>
                <h1 className='text-3xl  border-2 mx-[600px] border-red-700 text-center mb-10'>Step-2</h1>
                <p className='mx-20 text-justify'>After that you can go to the <span className='text-green-500 font-bold'><Link href="/dashboard">Dashboard</Link></span> and elplore the routs . You can decorate you profile page . Then if you want to create meet link for your interviewee click on setupinterview there you can see a from with tree inputs first you have to provide a name of your interview second you should provide a duration of time last seclect the location where you want take the interview  then clik the create button . After clicking the cteate button you will see a link on you accibity route go there and copy that .  Now you can shere the link to you likely interviewee . if they seclect the time and scheduled their interview you will get the mail with meet link.</p>
            </div>
            <div className='pt-10'>
            <h1 className='text-3xl border-2 mx-[600px] border-red-700 text-center mb-10'>Step-3</h1>
             <p className='mx-20 text-justify'>If you are facaeing any type of problem to create interview link or another problem that you are facing then just go to the <span className='font-bold text-green-500'><Link href="/about">About</Link></span> about page and scroll down and then you will see a form. You have to fill the form to infrom us what type of problem you are facing . We give solution within 24 hours that is your commitment .</p>
            </div>

            <div className='flex justify-center items-center pt-10 mb-10'> 
               <Link href="/"> <button className='btn  btn-warning'>GO BACK TO HOME</button> </Link> 
                
           </div>
        </div>
    );
};

export default Instractions;