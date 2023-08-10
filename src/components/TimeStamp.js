import moment from 'moment'

const TimeStamp = ({ timeStamp }) => <time className='gray'>{moment(new Date(timeStamp)).format('MM/DD/YYYY')}</time>

export default TimeStamp