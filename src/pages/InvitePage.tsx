import Countdown from '../components/Countdown'
import Story from '../components/Story'
import Program from '../components/Program'
import Calendar from '../components/Calendar'


export default function InvitePage() {
  return (
    <div className="page page2">
      <section className="section countdown-section" style={{ backgroundImage: `url('/images/background2.jpg')` }}>
        <h2>Our Wedding Countdown</h2>
        <Countdown />
        <p>Join us on July 20, 2025, Yerevan, Armenia</p>
      </section>

        <Calendar />
        
      <Story />
      <Program />
    </div>
  )
}
