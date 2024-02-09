import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useConnect, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';
import { EditionMetadataWithOwnerOutputSchema } from '@thirdweb-dev/sdk';

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0xEB2F21D22c4Bb6592A3ea830A51a84124AfFe40F');
  const { mutateAsync: issueBirthCertificate } = useContractWrite(contract, 'issueBirthCertificate');

  const address = useAddress();
  const connect = useConnect();

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


  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        connect,
        issueBirthCertificate:publishCertificate
        // createCampaign: publishCampaign,
        // getCampaigns,
        // getUserCampaigns,
        // donate,
        // getDonations
      }}
    >
      {children}
    </StateContext.Provider>
 )
}
export const useStateContext = () => useContext(StateContext);
