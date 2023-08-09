const Avatar = props => (
  <div 
    className='cover' 
    style={{
      backgroundImage: `url(${props.image})`,
      borderRadius: '50%',
      height: 40,
      width: 40
    }}>
  </div>
)

export default Avatar