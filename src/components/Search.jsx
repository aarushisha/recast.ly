var Search = (props) =>{
  console.log(props)
   return (<div className="search-bar form-inline">
    <input className="form-control" type="text" onChange = {props.handleChange}/>
    <button className="btn hidden-sm-down">Search</button>
    <span className="glyphicon glyphicon-search"></span>
  </div>)

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
