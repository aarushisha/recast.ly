var Search = (props) =>{
  console.log(props)
   return (<div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick = {() => props.handleClick(props)}></button>
    <span className="glyphicon glyphicon-search"></span>
  </div>)

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
