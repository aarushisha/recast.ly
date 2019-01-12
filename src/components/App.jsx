import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
// import exampleVideoData from './data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.exampleVideoData);
    this.state = {
      // keep track of videos in videoList
      videos : [],
      // // keep trach of video in videoPlayer
      video : null
    }
  }
  hasClickVideoTitle(video){
      this.setState (
        {video : video.video}
      );
      console.log(video);
  }
  componentDidMount(){
    this.setState (
      {
        videos : this.props.exampleVideoData,
        video : this.props.exampleVideoData[0]
      }
    )
  }
  render() {
    //  console.log(this.props.exampleVideoData[0]);

    return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> view goes here</h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <VideoPlayer video={this.state.video}/>
            </div>
            <div className="col-md-5">
              <VideoList videos={this.state.videos} setVideo={this.hasClickVideoTitle.bind(this)} />
            </div>
          </div>
        </div>
      )
  }

}

export default App;
