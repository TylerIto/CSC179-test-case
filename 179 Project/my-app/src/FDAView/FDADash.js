import './FDA.css';
import useJaneHopkins from './useFDA';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CustomLayout from './FDALayout';
function FDADash() {
  const {entities} = useJaneHopkins();
  const [patientName, setName] = useState("");
  const [dob, setDob] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const addPatient = async(patientName, dob, insuranceNumber) => {
    const addPatientResponse = await entities.patient.add({
      name: patientName,
      dob: dob,
      insuranceNumber: insuranceNumber,
    })
    console.log(addPatientResponse);
  }
  return(
  <div className="FDADash">
    <h1>FDA Dashboard</h1>
    <label>Patient Name: <input type="text" value={patientName} onChange={(e) => setName(e.target.value)}/></label>
    <br />
    <label>Date of Birth: <input type="text" value={dob} onChange={(e) => setDob(e.target.value)}/></label>
    <br />
    <label>InsuranceNumber: <input type="text" value={insuranceNumber} onChange={(e) => setInsuranceNumber(e.target.value)}/></label>
    <br />
    <button onClick={() => {addPatient(patientName, dob, insuranceNumber);}}>
      Add patient
    </button>
    <br />
  </div>
  );
}

export default FDADash;