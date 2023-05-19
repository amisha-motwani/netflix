const Card = (props) => {
    return(
        <>
        <div className="card" style={{ width: "auto"}}>
          <img src={props.imgsrc} className="card-img-top px-5" alt="profile picture" />
           <div className="card-body">
              <h5 className="card-title m-auto px-5" style={{fontFamily:"Regular", fontSize:"23px", fontWeight:"500"}}> {props.heading} </h5>
              <p className="card-text mt-3 m-auto px-5" style={{fontFamily:"Regular", fontSize:"18px"}}> {props.para} </p>
            </div>
        </div>
        </>
    )
}
export default Card;