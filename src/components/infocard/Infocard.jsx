import './infocard.css'

function Infocard(props) {
  console.log(props)
  return (
    <div>
   <div className="infocard">
    <img src="./u.png" alt="" />
        <h3>{props.ism}</h3>
        <p>{props.yozu}</p>
        <button className='btn'>Read now</button>
   </div>
    </div>
  )
}

export default Infocard
