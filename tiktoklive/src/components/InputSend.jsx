import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { userContext } from "../context/contextsend"

export default function InputSend(){
    const [inputsend,setInputsend] = useState("")
    const [stylebtn,setStylebtn] = useState({})
    const navigate = useNavigate() 

    const {setUsername} = userContext;

    const handleinput = (value) => {
        setInputsend(value)
    }

    useEffect(() => {
        if(inputsend !== ''){
            setStylebtn({
                border: '0.125rem solid rgb(5, 68, 181)',
                transition: 'color 0.2s', 
                fontSize: '1rem',
                lineHeight: '1.3125rem',
                backgroundColor: 'rgb(5, 68, 181)',
                cursor: 'pointer',
                color: 'rgb(255, 255, 255)'
            })
        }else{
            setStylebtn({})
        }
    },[inputsend])

    const handlenext = () => {
        setUsername(inputsend)
        navigate('/comfirm')
    }

    const cleaninput = () => {
        setInputsend("")
    }

    return <>
        <div className="inputsend">
            <h1>Send Money</h1>
            <div>
                <div className="inputsend__input">
                    <svg className="inputsend__input__img1cleanareainput" xmlns="http://www.w3.org/2000/svg" fill="rgb(145, 152, 160)" viewBox="0 0 24 24" width="1.5em" height="1.5em" data-ppui="true">
                        <path fill-rule="evenodd" d="M15.052 16.46a7.5 7.5 0 1 1 1.413-1.415l3.243 3.243a1 1 0 1 1-1.414 1.414l-3.242-3.241zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" clip-rule="evenodd" data-ppui="true">
                        </path>
                    </svg>
                    <input onChange={(e) => handleinput(e.target.value)} type="text" value={inputsend} placeholder="Name, username, email, mobile"/>
                    <svg className="inputsend__input__img2cleanareainput" onClick={cleaninput} xmlns="http://www.w3.org/2000/svg" fill="rgb(145, 152, 160)" viewBox="0 0 24 24" width="1.5em" height="1.5em" data-ppui="true">
                        <path fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM8.111 9.171L10.94 12l-2.83 2.829a.75.75 0 0 0 1.06 1.06L12 13.061l2.828 2.828a.75.75 0 0 0 1.06-1.06L13.061 12l2.828-2.828a.75.75 0 1 0-1.06-1.061L12 10.939 9.172 8.111a.75.75 0 0 0-1.06 1.06z" clip-rule="evenodd" data-ppui="true">
                        </path>
                    </svg>
                </div>
            </div>
            <div style={stylebtn} onClick={handlenext} className="inputsend__btn">Next</div>
        </div>
    </>
}