import './FDA.css';
import useJaneHopkins from './useFDA';
import React, { useState } from "react";
import CustomLayout from './FDALayout';
function FDANew() {
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
  <div className="FDANew">
    <h1>FDA New</h1>
  </div>
  );
}

export default FDANew;