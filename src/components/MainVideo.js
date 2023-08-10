import Divider from '../components/Divider'
import TimeStamp from '../components/TimeStamp'

import viewsIcon from '../assets/Icons/views.svg'
import likesIcon from '../assets/Icons/likes.svg'

const MainVideo = ({ data }) => (
  <div>
    <section>
      <h2>{data.title}</h2>
      <div className='flex justify-between'>
        <div>
          <strong>By {data.channel}</strong>
          <TimeStamp timeStamp={data.timestamp} />
        </div>
        <div>
          <div className='dib'>
            <i><img src={viewsIcon} alt='' /></i>
            <span>{data.views}</span>
          </div>
          <div className='dib'>
            <i><img src={likesIcon} alt='' /></i>
            <span>{data.likes}</span>
          </div>
        </div>
      </div>
    </section>
    <Divider />
    <section>
      <h2>{data.comments.length} Comments</h2>
    </section>
  </div>
)

export default MainVideo