import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

var App = (props) => {
  // console.log(props);
  return (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <div><h5><em>search</em> view goes here</h5></div>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <div><h5><em>videoPlayer</em><VideoPlayer video={props.exampleVideoData[0]}/></h5></div>
      </div>
      <div className="col-md-5">
        <div><h5><em>videoList</em><VideoList videos={props.exampleVideoData}/></h5></div>
      </div>
    </div>
  </div>
  )
}

export default App;
