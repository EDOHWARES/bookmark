import React from "react";
import {AiFillUnlock, AiTwotoneLock} from "react-icons/ai";
import {AiTwotoneUnlock} from "react-icons/ai";

const SingleFaq = (props) => {

    const [dispFaq, setDispFaq] = React.useState(false)

    const toggleDisp = () => {
        setDispFaq((prevState) => {
            return !prevState;
        })
    }
  return (
    <div className="flex flex-col space-y-2">
        <div className="flex bg-black/5 px-4 py-2 text-[1rem] md:text-xl text-start cursor-pointer items-center justify-between" onClick={toggleDisp}>

        <p>{props.faq}</p>
        {!dispFaq && <AiTwotoneLock />}
        {dispFaq && <AiFillUnlock />}

        </div>
        { dispFaq && <div className="bg-black/10">
            <p className="text-start px-4 py-2 text-[.8rem] md:text-[1rem]">
                {props.details}
            </p>
        </div>}

    </div>
  )
}

export default SingleFaq
