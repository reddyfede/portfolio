import './Contacts.css';
import resume from '../../images/resume.pdf';

export default function Contacts() {
  return (
    <div className='Contacts'>
      <a
        href='https://www.linkedin.com/in/reddyfede/'
        target='_blank'
        rel='noreferrer'
        className='fa-brands fa-linkedin'
      ></a>
      <a
        href='https://github.com/reddyfede'
        target='_blank'
        rel='noreferrer'
        className='fa-brands fa-github'
      ></a>
      <a
        href="mailto:reddyfede@gmail.com?subject=Let's get in touch!&body=I saw your portfolio."
        target='_blank'
        rel='noreferrer'
        className='fa-solid fa-envelope'
      ></a>
      <a
        href={resume}
        target='_blank'
        rel='noreferrer'
        className='fa-solid fa-id-card'
      ></a>
    </div>
  );
}
