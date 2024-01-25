

const TestimonialsSectionLoad = async () => {

    
        const res = await fetch('https://schedulemeet-server-two.vercel.app/userTestimonial')
        if (!res.ok) {
         
          throw new Error('Failed to fetch data')
        }
       
        return res.json()
      
    
  
};

export default TestimonialsSectionLoad;