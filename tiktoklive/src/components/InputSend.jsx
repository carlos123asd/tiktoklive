export default function InputSend(){
    return <>
        <div className="inputsend">
            <h1>Send Money</h1>
            <div>
                <div className="inputsend__input">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="rgb(145, 152, 160)" viewBox="0 0 24 24" width="1.5em" height="1.5em" data-ppui="true">
                        <path fill-rule="evenodd" d="M15.052 16.46a7.5 7.5 0 1 1 1.413-1.415l3.243 3.243a1 1 0 1 1-1.414 1.414l-3.242-3.241zM16 10.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" clip-rule="evenodd" data-ppui="true">
                        </path>
                    </svg>
                    <input type="text" placeholder="Name, username, email, mobile"/>
                </div>
            </div>
            <div className="inputsend__btn">Next</div>
        </div>
    </>
}