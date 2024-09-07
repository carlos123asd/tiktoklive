import icon from '../assets/img/paypal.png'

export default function Nav(){
    return <>
        <nav>
            <div className='contentNav'>
                <img src={icon} alt="icon PayPal" className="contentNav__icono" />
                <div className="contentNav__menu">
                    <ul>
                        <li>Start</li>
                        <li>Activity</li>
                        <li>Pay & receive payments</li>
                        <li>Marketing for growth</li>
                        <li>Business Tools</li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}