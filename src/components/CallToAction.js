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

export default CallToAction