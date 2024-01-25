

const TestimonialsSectionLoad = async () => {

    
        const res = await fetch('http://localhost:5000/userTestimonial')

       
        if (!res.ok) {
         
          throw new Error('Failed to fetch data')
        }
       
        return res.json()
      
    
  
};

export default TestimonialsSectionLoad;