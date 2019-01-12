import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

// var App = (props) => {
//   // console.log(props);
//   return (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em><VideoPlayer video={props.exampleVideoData[0]}/></h5></div>
//       </div>
//       <div className="col-md-5">
//         <div><h5><em>videoList</em><VideoList videos={props.exampleVideoData}/></h5></div>
//       </div>
//     </div>
//   </div>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.exampleVideoData);
    this.state = {
      // keep track of videos in videoList
      videos : this.props.exampleVideoData,
      // keep trach of video in videoPlayer
      video : this.props.exampleVideoData[0]
    }
  }
  hasClickVideoTitle(video){
      this.setState (
        {video : video.video}
      );
      console.log(video);

    
    // Pass the function to VideoList
    // 
    // //  onListItemClick() {
    // this.setState({
    //   video: !this.state.done //whatever title was clicked
    // });
  }
    
  render() {
     console.log(this.props.exampleVideoData[0]);

    return (
        <div>
          <nav className="navbar">
            <div className="col-md-6 offset-md-3">
              <div><h5><em>search</em> view goes here</h5></div>
            </div>
          </nav>
          <div className="row">
            <div className="col-md-7">
              <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.video}/></h5></div>
            </div>
            <div className="col-md-5">
              <div><h5><em>videoList</em><VideoList videos={this.state.videos} setVideo={this.hasClickVideoTitle.bind(this)} /></h5></div>
            </div>
          </div>
        </div>
      )
  }

}

export default App;
