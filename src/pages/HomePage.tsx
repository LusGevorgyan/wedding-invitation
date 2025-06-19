import { useNavigate } from 'react-router-dom'
import NameSVG from './../../public/images/nave-svg';

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="page page1" style={{ backgroundImage: `url('/images/background1.jpg')` }}>
      <div className="page1-container">
        <h1 className="bride-groom">
            <NameSVG />
        </h1>
       
        <button className="enter-button" onClick={() => navigate('/invite')}>
            Դիտել հրավերը
        </button>
      </div>
    </div>
  )
}
