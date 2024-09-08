import { useState } from "react"
import {userContext} from '../context/contextsend'

export default function ContentNumSend(){
    const [inputsend,setInputsend] = useState("0,00")
    const {username} = userContext;

    const handleinput = (value) => {
        setInputsend(value)
    }

    return <>
        <div className="contentnumsend">
            <h1>Send money to</h1>
            <h3>{username}</h3>
            <input aria-label="enter amount field" value={inputsend} onChange={(e) => handleinput(e.target.value)} autoComplete="off" type="tel" required="" />
            <select name="" id="">
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BAM">BAM</option>
                <option value="BDT">BDT</option>
                <option value="BGN">BGN</option>
                <option value="BHD">BHD</option>
                <option value="BIF">BIF</option>
                <option value="BOB">BOB</option>
                <option value="BRL">BRL</option>
                <option value="BTN">BTN</option>
                <option value="BWP">BWP</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CRC">CRC</option>
                <option value="CZK">CZK</option>
                <option value="DJF">DJF</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="ERN">ERN</option>
                <option value="ETB">ETB</option>
                <option value="EUR" selected={true}>EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GMD">GMD</option>
                <option value="GNF">GNF</option>
                <option value="GTQ">GTQ</option>
                <option value="GYD">GYD</option>
                <option value="HKD">HKD</option>
                <option value="HNL">HNL</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="JMD">JMD</option>
                <option value="JOD">JOD</option>
                <option value="JPY">JPY</option>
                <option value="KES">KES</option>
                <option value="KMF">KMF</option>
                <option value="KRW">KRW</option>
                <option value="LKR">LKR</option>
                <option value="MAD">MAD</option>
                <option value="MGA">MGA</option>
                <option value="MMK">MMK</option>
                <option value="MUR">MUR</option>
                <option value="MWK">MWK</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="MZN">MZN</option>
                <option value="NOK">NOK</option>
                <option value="NPR">NPR</option>
                <option value="NZD">NZD</option>
                <option value="OMR">OMR</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="QAR">QAR</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="RWF">RWF</option>
                <option value="SAR">SAR</option>
                <option value="SCR">SCR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TND">TND</option>
                <option value="TOP">TOP</option>
                <option value="TTD">TTD</option>
                <option value="TWD">TWD</option>
                <option value="TZS">TZS</option>
                <option value="UAH">UAH</option>
                <option value="UGX">UGX</option>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="XAF">XAF</option>
                <option value="XCD">XCD</option>
                <option value="XOF">XOF</option>
                <option value="ZAR">ZAR</option>
                <option value="ZMW">ZMW</option>
            </select>
            <span>For more information please read our <a>user agreement.</a></span>
            <div className="contentnumsend__next">Next</div>
            <div className="contentnumsend__cancel">Cancel</div>
        </div>
    </>
}