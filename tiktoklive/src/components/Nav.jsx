import icon from '../assets/img/paypal.png'

export default function Nav(){
    return <>
        <nav>
            <div className='contentNav'>
                <img src={icon} alt="icon PayPal" className="contentNav__icono" />
                <div className="contentNav__menu">
                    <ul>
                        <li>Home</li>
                        <li>Activity</li>
                        <li>Pay & Get Paid</li>
                        <li>Marketing for Growth</li>
                        <li>Business Tools</li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}