import React, { useRef, useState } from 'react'
import './index.css';

const OtpInput = (props) => {
    const [otp, setOtp] = useState("")
    // const inputStr = otp.split('')
    const otpRef1 = useRef("")
    const otpRef2 = useRef("")
    const otpRef3 = useRef("")
    const otpRef4 = useRef("")

    const handleInputOtp = (e, ref, prev) => {
        let otpNew = otp
        console.log("inside otphgsbnsvna7826723", e.target.value, otpNew)
        if (e.target.value ) {
            otpNew += e.target.value;
            if (ref) {
                ref.current.focus()
            }
        }
        else {
            otpNew = otpNew.slice(0, otpNew?.length - 1)
            if(prev) prev.current.focus();
        }
        // otpNew = {...otpNew, [id]: e.target.value}
        setOtp(otpNew)
    }
    console.log("new input componetass>>>>>>>>>>>>>>>>>>>>>", otp[0])
    return (
        <div className='input-main'>
            <input autoFocus ref={otpRef1} value={otp[0]} className={"input-boxes"} type="text" onChange={(e) => handleInputOtp(e, otpRef2, null)} />
            <input ref={otpRef2} value={otp[1]} className={"input-boxes"} type="text" onChange={(e) => handleInputOtp(e, otpRef3, otpRef1)} />
            <input ref={otpRef3} value={otp[2]} className={"input-boxes"} type="text" onChange={(e) => handleInputOtp(e, otpRef4, otpRef2)} />
            <input ref={otpRef4} value={otp[3]} className={"input-boxes"} type="text" onChange={(e) => handleInputOtp(e, null, otpRef3)} />
        </div>
    )
}

export default OtpInput;