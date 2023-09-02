import React from 'react';
import SingleFaq from './SingleFaq';

const Contact = () => {


    const [formData, setFormData] = React.useState({
        email: ""
    })

    console.log(formData)

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData((prevData) => {
            return {
                ... prevData,
                email: ""
            }
        })
        let el = document.getElementById("submitBtn");
        el.innerHTML = "SUCCESS!"
        el.style.backgroundColor = "green"

        const returnToNormal = () => {
            el.innerHTML = "Contact us"
            el.style.backgroundColor = "rgb(239 68 68)"
        }

        setTimeout(() => {
            returnToNormal()
        }, 2000);

    }
  return (
    <div>
        <div className='text-center flex flex-col space-y-4'>

            <h1 className='font-bold px-10 py-4 text-xl md:text-3xl text-gray-800 text-center'>Frequently Asked Questions</h1>
            <p className='text-gray-500 px-10 py-4'>
                Here are some of our FAQs. If you have any questions you'd like 
                answered please feel free to email us.
            </p>

        </div>

        <div className='mt-10 px-10 py-4 flex flex-col space-y-4 max-w-[40rem] text-center text-xl md:text-2xl text-gray-600 ml-auto mr-auto'>
            <SingleFaq 
            faq="What is Bookmark?"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate omnis sint tempora explicabo qui hic, doloribus odit officia odio suscipit provident molestiae illum fugiat ut autem, quia corporis assumenda?"
            />

            <SingleFaq 
            faq="How can I request a new browser?"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate omnis sint tempora explicabo qui hic, doloribus odit officia odio suscipit provident molestiae illum fugiat ut autem, quia corporis assumenda?"

            />

            <SingleFaq 
            faq="Is there a mobile app?"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate omnis sint tempora explicabo qui hic, doloribus odit officia odio suscipit provident molestiae illum fugiat ut autem, quia corporis assumenda?"

            />       

            <SingleFaq 
            faq="What about other Chromium browsers?"
            details="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cupiditate omnis sint tempora explicabo qui hic, doloribus odit officia odio suscipit provident molestiae illum fugiat ut autem, quia corporis assumenda?"

            />                 


        </div>

        <div className='flex items-center justify-center'>

            <button className='bg-blue-500 px-4 py-2 text-white rounded-md mt-9 hover:bg-blue-800 duration-500 font-bold'>More Info</button>

        </div>

        <div className='bg-blue-500 flex flex-col items-center justify-around mt-10 h-64 text-center p-4'>
            <small className='text-textColor text-center'>35.000+ ALREADY JOINED</small>
            <h1 className='text-center text-xl font-bold text-textColor md:text-2xl'>
                Stay up-to-date with what <br /> we're doing
            </h1>
            <form action="" onSubmit={handleSubmit}>
                <input name='email' type="email" placeholder='Enter your email address' className='px-4 py-2 outline-none focus:bg-gray-100 rounded-l-md' value={formData.email} required onChange={handleChange} />
                <button id='submitBtn' className='bg-red-500 hover:bg-red-700 duration-500 text-white px-4 py-2 rounded-r-md font-bold'>Contact us</button>
            </form>
        </div>


    </div>
  )
}

export default Contact

