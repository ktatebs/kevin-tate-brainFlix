import './App.css'
import 'tachyons'
import Header from './components/Header'
import VideoPlayer from './components/VideoPlayer'
import MainVideo from './components/MainVideo'

import videoDetailsData from './assets/Data/video-details.json'

function App() {
  const mainVideo = videoDetailsData[0]
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className='flex justify-center bg-black'>
          <VideoPlayer data={mainVideo} />
        </div>
        <div className='flex ph7'>
          <section style={{ width: '70%' }}>
            <MainVideo data={mainVideo} />
          </section>
          <section style={{ width: '30%' }}></section>
        </div>
      </main>
    </div>
  );
}

export default App;