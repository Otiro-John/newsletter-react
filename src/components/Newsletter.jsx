import './Newsletter.css'
import tick from '../images/icon-list.svg'
import desktop from '../images/illustration-sign-up-desktop.svg'
const Newsletter = () => {
  return (
    <div className='container'>
     <div className="left">
        <h1>STAY UPDATED!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
        <li><img src={tick} alt="" />    <span>Product discovery and building what matters</span></li>
        <li><img src={tick} alt="" />    <span>Measuring to ensure updates are a success</span></li>
        <li><img src={tick} alt="" />    <span>And much more!</span></li>
       
        </ul>
        <div className="inputs">
        <label>E-mail:</label>
        <br />
        <input type="email" placeholder='email@company.com' />
        <button type="submit">Subscribe to monthly newsletter.</button>
        </div>
     </div>
     <div className="right">
        <img src={desktop} alt="" />
     </div>
    </div>
  )
}

export default Newsletter