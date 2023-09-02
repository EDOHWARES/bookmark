import React from 'react'

const FeaturesNav = (props) => {
    const [border, setBorder] = React.useState(true)

    const handleClick = () => {
        setBorder((prevState) => {
            return !prevState
        })
    }
  return (
    <div>
     <p className={`border-b-4 pb-4 border-b-transparent ${border ? "border-b-red-600" : "border-b-transparent"} cursor-pointer`} onClick={handleClick}>{props.txt}</p>
    </div>
  )
}

export default FeaturesNav
