import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
// import exampleVideoData from './data/exampleVideoData.js';
// AIzaSyCoE_Nv0XygYyhMKDGIe7ya1V_JpPNM9M8

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos : [],
      video : null,
      // value : ''
    }
     this.handleChange = _.debounce(this.handleChange, 500);
  }
  hasClickVideoTitle(video){
      this.setState (
        {video : video.video}
      );
  }


  handleChange(event) {
    console.log(event)
    // this.setState({ value : event.target.value});
    this.props.searchYouTube({
      max: 5,
      query: event,
      key: "AIzaSyASOkY-8RwNgYk45gyjzXOMbBI7VjtBnpA"
    }, this.changeState.bind(this))
  }
  handleClick() {
    console.log("inside handleClick")

  }
  changeState(data) {
    this.setState (
      {
        videos : data,
        video : data[0]
      }
    )
  }
  componentDidMount(){
    this.props.searchYouTube({
      max: 5,
      query: "example",
      key: "AIzaSyASOkY-8RwNgYk45gyjzXOMbBI7VjtBnpA"
    }, this.changeState.bind(this))
  }

  render() {
    return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><Search handleClick ={this.handleClick.bind(this)} handleChange = {this.handleChange.bind(this)}/></div>
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
