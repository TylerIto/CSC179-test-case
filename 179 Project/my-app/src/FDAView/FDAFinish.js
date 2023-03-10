import './FDA.css';
import useJaneHopkins from './useFDA';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import CustomLayout from './FDALayout';

function FDAFinished() {
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
  <div className="FDAFinished">
    <h1>FDA Finished</h1>
  </div>
  );
}

export default FDAFinished;