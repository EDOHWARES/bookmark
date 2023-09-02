import React from 'react';
import tab1 from "../Assets/illustration-features-tab-1.svg";
import tab2 from "../Assets/illustration-features-tab-2.svg";
import tab3 from "../Assets/illustration-features-tab-3.svg";
import Illustration from './Illustration';
import FeaturesNav from './FeaturesNav';

const Features = () => {

    const [disp, setDisp] = React.useState(true);

    const switchDisp = () => {
      setDisp(() => {
        return true
      })
    }
  return (
    <div className='w-screen py-4 px-10'>

        <div className='mx-auto space-y-5'>

        <h2 className='text-center font-bold text-3xl text-gray-500'>Features</h2>
        <p className='text-center text-gray-500'>
            Our aim is to make it easy for you to access your favourite websites. 
            Your bookmarks sync between your devices so you can acess them on the go
        </p>

        <div className='flex mx-auto w-fit space-x-12 text-gray-500 border-b text-center text-[.9rem] md:text-xl'>
          <FeaturesNav 
          txt="Simple bookmarking"
          />
          <FeaturesNav 
          txt="Speedy searching"
          />
          <FeaturesNav 
          txt="Easy sharing"
          />
        </div>

        <Illustration 
        tab={tab1}
        hd="Bookmark in one click"
        txt="Organize your bookmarks however you like. our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
        />



        </div>
      
    </div>
  )
}

export default Features
