import './App.css'
import Infocard from './components/infocard/Infocard'
import Usercard from './components/usercard/Usercard'

function App() {
  return (
    <div>
      <div className="user-ota container">
        <Usercard ism="Kimsanova Kimsanoy" kasbi="admin" joy="Adminidtratsiyada" ></Usercard>
        <Usercard ism="Arjun Patel" kasbi="Software Engineer" joy="Technology" ></Usercard>
        <Usercard ism="Carlos Hernández" kasbi="UI Designer" joy="Design" ></Usercard>
        <Usercard ism="Amina Idris" kasbi="Marketing Specialist" joy="Marketing" ></Usercard>
        <Usercard ism="Takumi Sato" kasbi="HR Specialist" joy="Human Resources" ></Usercard>
        <Usercard ism="Chen Wei" kasbi="Data Analyst" joy="Data Science" ></Usercard>
        <Usercard ism="Emma Dubois" kasbi="Sales Manager" joy="Sales" ></Usercard>
        <Usercard ism="Igor Sokolov" kasbi="Quality Assurance" joy="Quality Control" ></Usercard>
        
      </div>
      <div className="info-ota container">
        <Infocard ism="Unraveling the Mysteries of the Ocean" yozu="From the mesmerizing marine life that inhabits the coral reefs to the vast and  uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."></Infocard>
        <Infocard ism="Unraveling the Mysteries of the Ocean" yozu="From the mesmerizing marine life that inhabits the coral reefs to the vast and  uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."></Infocard>
        <Infocard ism="Unraveling the Mysteries of the Ocean" yozu="From the mesmerizing marine life that inhabits the coral reefs to the vast and  uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."></Infocard>
        <Infocard ism="Unraveling the Mysteries of the Ocean" yozu="From the mesmerizing marine life that inhabits the coral reefs to the vast and  uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."></Infocard>
        <Infocard ism="Unraveling the Mysteries of the Ocean" yozu="From the mesmerizing marine life that inhabits the coral reefs to the vast and  uncharted depths that hold untold secrets, we embark on a journey of discovery and exploration."></Infocard>
      </div>
      
    </div>
  )
}

export default App
