"use client"

const LoadingPage = () => {
    return (
        <div className='flex justify-center h-[100vh] items-center w-full'>
           <div>
           <span className="loading loading-spinner text-success"></span>
           </div>
        </div>
    );
};

export default LoadingPage;