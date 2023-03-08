import logo from './LogoBavaria.JPG';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';

function App() {
  
  const { entities } = useJaneHopkins();
/*
  const addPatient = async() =>
  {
      const addPatientResponse = await entities.patient.add(
        {
          name: "Billy",
          dob:  "January 17, 2000",
          insuranceNumber: "11432190",
        });
      console.log(addPatientResponse);
  }
  */

  return (
    <div className="App">
      <img src={logo} alt="logo" /><br></br>
      <label>LOGGED IN AS: ADMIN</label><br></br>
      <button>FDA</button><br></br>
      <button>RESULTS</button><br></br>
      <button>REPORTS</button><br></br>
    </div>
  );
}

export default App;
