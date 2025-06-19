import Countdown from '../components/Countdown'
import Story from '../components/Story'
import Program from '../components/Program'
import Calendar from '../components/Calendar'
import "../components/invite.css"

export default function InvitePage() {
  const deadline = new Date('2025-07-21T20:00:00');

  return (
    <div className="invite-page">
      <section className="hero">
        <div className="overlay">
          <h1 className="monogram">A<span>|</span>S</h1>
          <p className="subtitle">Հարսանյաց հրավեր</p>
          <Countdown targetDate={deadline} />
        </div>
      </section>

      <section className="description">
        <p>
          Մեր կյանքի ամենագեղեցիկ օրվա մասին երազելիս միշտ պատկերացրել ենք ձեզ՝ մեր սիրելի, հարազատ ու կարևորված մարդկանց մեր կողքին։
Ուստի մեծ սիրով հրավիրում ենք Ձեզ ներկայանալու մեր հարսանիքին՝ դարձնելով օրը առավել հիասքանչ ու հիշարժան։
        </p>
      </section>

      <section className="love-story">
        <div className="text-block">
          <p className="name-top">Name</p>
        </div>

        <div className="photo-grid">
          <div className="photo left">
            <img src="/images/background3.jpg" alt="Couple 1" />
            <p className="amp">&</p>
          </div>
          <div className="photo right-top">
            <img src="/images/background7.jpg" alt="Couple 2" />
          </div>
          <div className="photo right-bottom">
            <img src="/images/background8.jpg" alt="Couple 3" />
            <p className="name-bottom">Name</p>
          </div>
        </div>
      </section>

        <Calendar />
        <Story />
        <Program />

    </div>
  );
}
