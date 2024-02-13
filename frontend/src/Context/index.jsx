import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useConnect, useContractWrite, useContractRead,useContractEvents } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0xEB2F21D22c4Bb6592A3ea830A51a84124AfFe40F');
  const { mutateAsync: issueBirthCertificate } = useContractWrite(contract, 'issueBirthCertificate');

  const address = useAddress();
  const connect = useConnect();

  const getUserData = async (_id) => {
    try {
      const { data, isLoading } = useContractRead(contract, "getData", [_id])
        return data;
    } catch (err) {
        console.error("Error fetching user data:", err);
        return null;
    }
}

  const publishCertificate = async(form) =>{
    try{
        const id = await issueBirthCertificate({
         args:[
          form.dob,
          form.name,
          form.fatherName,
          form.motherName,
          form.sex
         ],
          
        })
        console.log("contract call success", id);
        return id;
    }catch(err){
      console.log(err)
    }
  }
  const getEventsData = async () => {
    try {
      const { data: events } =  useContractEvents(contract, "CertificateIssued");
      // const eventArray = events.map(event => ({
      //   birthId: event.birthId,
      //   dob: event.dob,
      //   name: event.name,
      //   fatherName: event.fatherName,
      //   motherName: event.motherName,
      //   sex: event.sex
      // }));
      return events;
    } catch (err) {
      console.error("Error fetching events data:", err);
      return null;
    }
  }
  


 



  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connect,
        issueBirthCertificate:publishCertificate,
        getUserData,
        getEventsData
      }}
    >
      {children}
    </StateContext.Provider>
 )
}
export const useStateContext = () => useContext(StateContext);
