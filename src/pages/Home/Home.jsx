import foto from '../../images/profile.jpg';
import './Home.css';
import { Contacts } from '../../components';

export default function Home() {
  return (
    <div id='home'>
      <img src={foto} alt='profilePic' />
      <div>
        <h1>federicoRossi</h1>
        <p>Software Engineer</p>
        <div className='contacts'>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
