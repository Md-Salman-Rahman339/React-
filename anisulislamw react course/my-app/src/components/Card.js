const w={
    width: "18rem"
}

function Card(props){
  const {titleText,descText}=props
      return <div className="card" style={w}>
        <div className="card-body">
          <img ></img>
          <h5 className="card-title"> {titleText}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.{descText}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
}
export default Card;