const VideoPlayer = ({ data }) => <video style={{ aspectRatio: '16/9', maxHeight: 500  }} controls poster={data.image}></video>

export default VideoPlayer