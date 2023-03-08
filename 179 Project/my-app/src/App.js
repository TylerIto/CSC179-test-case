//import logo from './logo.svg';
import './App.css';
import useJaneHopkins from './hooks/useJaneHopkins';

function App() {
  
  const { entities } = useJaneHopkins();

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

  return (
    <div className="App">
      <button onClick={() => { addPatient(); } }>Add Patient</button>
    </div>
  );
}

export default App;
