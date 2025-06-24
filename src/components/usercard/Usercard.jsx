import './usercard.css'

function Usercard(props) {
  console.log(props);
  return (
    <div>
      <div className="ota">

      </div>
      <div className="usercard">
        <img src="./p.png" alt="" />
        <h4>{props.ism}</h4>
        <p>{props.kasbi} <br />
        {props.joy}</p>
      </div>
    </div>
  )
}

export default Usercard
