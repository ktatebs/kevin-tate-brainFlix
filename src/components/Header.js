import Avatar from './Avatar'
import brainFlixLogo from '../assets/Logo/BrainFlix-logo.svg'
import mohanMurugeImg from '../assets/Images/Mohan-muruge.jpg'
import searchIcon from '../assets/Icons/search.svg'
import uploadIcon from '../assets/Icons/upload.svg'

const Header = () => (
  <header className='flex justify-between ph7 pv4'>
    <img src={brainFlixLogo} alt='BrainFlix Logo' style={{ width: 125 }} />
    <div className='flex' style={{ gap: '2rem' }}>
      <div className='relative'>
        <img src={searchIcon} className='absolute pointer' style={{ top: '25%', left: '.5rem' }} alt='' />
        <input placeholder='Search' className='h-100 pl4 pr2' />
      </div>
      <CallToAction text='upload' icon={uploadIcon} />
      <Avatar image={mohanMurugeImg} altText='Mohan Muruge side headshot' />
    </div>
  </header>
)

const CallToAction = ({ text, icon, altText }) => (
  <button 
    className='ph4 br2 relative pointer' 
    style={{ backgroundColor: '#0095FF', height: 40, minWidth: 150, border: 'none' }}
  >
    <i className='absolute' style={{ top: '50%', transform: 'translateY(-50%)', left: '.5rem' }}>
      <img src={icon} alt={altText || ''} />
    </i>
    <span className='ttu white'>{text}</span>
  </button>
)

export default Header