"use client"

import Databackend from "./databackend";

const Test = () => {

  const userd = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;



const response = await fetch('http://localhost:5000/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

const d =  await response.json();
console.log(d)



  }

  return (
    <div>

      <form onSubmit={userd}>
        <input className='border-2 p-2' type="text" name="email" />
        <input className="bg-[#ddd] px-6 py-2" type="submit" value="Submit" />
      </form>

    </div>
  );
};

export default Test;
