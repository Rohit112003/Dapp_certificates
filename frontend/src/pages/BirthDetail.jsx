import React, { useState ,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import FormField from "../components/FormField";
import { useStateContext } from '../Context/index';
const BirthDetail = () => {
  
  const[dataChange , setDataChange ] = useState();
  const {issueBirthCertificate} = useStateContext();
  const navigate = useNavigate()
// const[token , setToken ] = useState();

  const [form, setForm] = useState({
    dob:'',
    name: '',
    fatherName:'',
    motherName: '',
    sex: '',
 

  });
  // useEffect(() => {
  //   const storedData = localStorage.getItem('myData');
  //   const newId = storedData+1;
  //   setToken(storedData + 1)
  //   localStorage.setItem('myData', newId);
  //   setToken()
  // });
  useEffect(()=>{
    setDataChange(25008);
  },[])

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
    console.log(form)

  }

  const handleSubmit = async (e)=>{ 
    e.preventDefault();
    if(!window.ethereum){
      alert("You don't have a metamask wallet")
    }
    
    // const storedData = localStorage.getItem('myData');
    // if (storedData) {
    //   setToken(storedData);
    // }
    setDataChange(dataChange+1);
    
    
    const id  = await issueBirthCertificate({...form})

    setForm({
      dob:'',
      name: '',
      fatherName:'',
      motherName: '',
      sex: ''
  });
  navigate('/https://thirdweb.com/sepolia/0xEB2F21D22c4Bb6592A3ea830A51a84124AfFe40F/events')
    console.log(id);
  }
  return (
    <div className="bg-[#000000] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">Add Birth details</h1>

      </div>
        <h1 className="text-white py-3 text-2xl sm:text-3xl ">Token No: {dataChange}</h1>

      <form  className="w-full mt-[65px] flex flex-col gap-[30px] p-4">
        <div className="flex flex-wrap gap-[40px]">
        <FormField 
            labelName="Birth Date*"
            placeholder="Birth Date"
            
            inputType="date"
            value={form.dob}
            handleChange={(e) => handleFormFieldChange('dob', e)}
          />
          <FormField 
            labelName="Campaign Title *"
            placeholder="Name of child"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Father Name*"
            placeholder="Name of Parent"
            inputType="text"
            value={form.fatherName}
            handleChange={(e) => handleFormFieldChange('fatherName', e)}
          />
          <FormField 
            labelName="Mother Name *"
            placeholder="Name of Parent"
            inputType="text"
            value={form.motherName}
            handleChange={(e) => handleFormFieldChange('motherName', e)}
          />
        </div>

        

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Sex *"
            placeholder="Male|Female|other"
            inputType="text"
            value={form.sex}
            handleChange={(e) => handleFormFieldChange('sex', e)}
          />
          <FormField 
            labelName="Guardian Address *"
            placeholder="Address"
            inputType="text"
            value={form.gaddress}
            handleChange={(e) => handleFormFieldChange('gaddress', e)}
          />
        </div>
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Hospital Name *"
            placeholder="Appollo Hospital"
            inputType="text"
            value={form.hospital}
            handleChange={(e) => handleFormFieldChange('hospital', e)}
          />
          <FormField 
            labelName="Hospital Address *"
            placeholder="Address"
            inputType="text"
            value={form.haddress}
            handleChange={(e) => handleFormFieldChange('haddress', e)}
          />
        </div>

         
      </form>
      <button onClick={handleSubmit} className="relative inline-flex items-center justify-center p-0.5 m-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-xl bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Submit
            </span>
          </button>
    </div>
  );
};

export default BirthDetail;
