import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
// import exampleVideoData from './data/exampleVideoData.js';
// AIzaSyBu7TDbeIY7y3XTW5g8I6WI7n4ZW-6_wEc

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
  handleClick() {
    console.log("inside handleClick")
    this.props.searchYouTube({
      max: 5,
      query: document.getElementsByClassName('form-control').value,
      key: "AIzaSyASOkY-8RwNgYk45gyjzXOMbBI7VjtBnpA"
    }, this.changeState.bind(this))
  }
  changeState(data) {
    this.setState (
      {
        videos : data,
        video : data[0]
      }
    )
  }
  // after click button
  //  acquire search words
  //  make get request with that search words
  //   get the data from server and render everything

  componentDidMount(){
    this.props.searchYouTube({
      max: 5,
      query: "example",
      key: "AIzaSyASOkY-8RwNgYk45gyjzXOMbBI7VjtBnpA"
    }, this.changeState.bind(this))
  }
  render() {
    //  console.log(this.props.exampleVideoData[0]);

    return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em><Search handleClick ={this.handleClick.bind(this)}/></h5></div>
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
