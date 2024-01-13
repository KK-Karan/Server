// import { useState } from "react";
// import {Button} from "@nextui-org/react";
// import {Input} from "@nextui-org/react";
// import { Textarea } from "@nextui-org/react";
// import { Link } from "react-router-dom";


// export default function Result() {
//   const [showModal, setShowModal] = useState(false);
//   let [nextId , setNextId] = useState(1)
  
//   const [companyName, setCompanyName] = useState("");
//   const [companyDescription, setCompanyDescription] = useState("")
//   const [companyCgpa , setCompanyCgpa] = useState("")
//   const [companyBranch , setCompanyBranch] = useState("")
//   const [companies, setCompanies] = useState([
//     {
//       id: 0,
//       name: 'DE Shaw',
//       description:'Specific responsibilities may include formulating statistical models for our computerized trading strategies.',
//       cgpa: '8.4',
//       branch: 'electrical'
//     },
//   ]);

//   function addCompany() {
//     if (companyName.trim() === "") {
//       alert("Company Name is required!");
//       return;
//     }
//     setShowModal(() => false)
//     setNextId(nextId => nextId + 1)
//      setCompanies(prevCompany => [
//         ...prevCompany,
//         {
//           id:nextId,
//           name:companyName,
//           description:companyDescription,
//           cgpa:companyCgpa,
//           branch:companyBranch
//         }
//      ]);
//      setCompanyName("")
//      setCompanyDescription("")
//      setCompanyCgpa("")
//      setCompanyBranch("")
//   }

//   return (
//     <>
//       <div className="add__jobs">
//       <Button
//         type="button"
//         color="danger"
//         className="add__button"
//         onClick={() => setShowModal(true)}
//       >
//         +New
//       </Button>
//       {companies.map((company) => (
//         <div key={company.id} className="company__description">
//           <p>{company.name}</p>
//           <Link to= "shortlist">
//           <Button color="secondary">View Shortlist</Button>
//           </Link>
//         </div>
//       ))}
//       </div>
//       {showModal ? (
//         <>
//           <div
//             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
//           >
//             <div className="relative w-auto my-6 mx-auto max-w-3xl">
//               <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t addjobs__modal ">
//                   <h3 className="text-3xl font-semibold">
//                     Add a New Job
//                   </h3>
                  
//                 </div>
//                 <div className="relative p-6 flex-auto modal__form ">
//                 <Input type="text" label="Company Name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} isRequired />
//                 <Textarea
//                   label="Description"
//                   placeholder="Enter your description"
//                   className="max-w-xs"
//                   value={companyDescription}
//                   onChange={(e) => setCompanyDescription(e.target.value)}
//                   />
//                 <Input type = "number" label = "CGPA" value={companyCgpa} onChange={(e) => setCompanyCgpa(e.target.value)}/>
//                 <Input type="text" label="Branch"  value={companyBranch} onChange={(e) => setCompanyBranch(e.target.value)}/>
//                 </div>
//                 {/*footer*/}
//                 <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-4">
//                   <Button
//                     type="Button"
//                     variant="flat"
//                     color="secondary"
//                     onClick={addCompany}
//                     className = "mb-2"
//                   >
//                     Add
//                   </Button>
//                   <Button
//                     type="Button"
//                     variant="flat"
//                     color="danger"
//                     onClick = {() => setShowModal(false)}
//                     className = "mb-2 mr-2"
//                   >
//                     Close
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
//         </>
//       ) : null}
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Result() {
  const [showModal, setShowModal] = useState(false);
  const [nextId, setNextId] = useState(1);
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [companyCgpa, setCompanyCgpa] = useState("");
  const [companyBranch, setCompanyBranch] = useState("");
  const [companies, setCompanies] = useState(() => {
    // Retrieve data from localStorage on component mount
    const storedCompanies = localStorage.getItem("companies");
    return storedCompanies ? JSON.parse(storedCompanies) : [];
  });

  useEffect(() => {
    // Save data to localStorage whenever companies array changes
    localStorage.setItem("companies", JSON.stringify(companies));
  }, [companies]);

  function addCompany() {
    if (companyName.trim() === "") {
      alert("Company Name is required!");
      return;
    }
    setShowModal(() => false);
    setNextId((prevId) => prevId + 1);
    setCompanies((prevCompany) => [
      ...prevCompany,
      {
        id: nextId,
        name: companyName,
        description: companyDescription,
        cgpa: companyCgpa,
        branch: companyBranch,
      },
    ]);
    setCompanyName("");
    setCompanyDescription("");
    setCompanyCgpa("");
    setCompanyBranch("");
  }

  return (
    <>
      <div className="add__jobs">
        <Button
          type="button"
          color="danger"
          className="add__button"
          onClick={() => setShowModal(true)}
        >
          +New
        </Button>
        {companies.map((company) => (
          <div key={company.id} className="company__description">
            <p>{company.name}</p>
            <Link to="shortlist">
              <Button color="secondary">View Shortlist</Button>
            </Link>
          </div>
        ))}
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t addjobs__modal ">
                  <h3 className="text-3xl font-semibold">Add a New Job</h3>
                </div>
                <div className="relative p-6 flex-auto modal__form ">
                  <Input
                    type="text"
                    label="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    isRequired
                  />
                  <Textarea
                    label="Description"
                    placeholder="Enter your description"
                    className="max-w-xs"
                    value={companyDescription}
                    onChange={(e) => setCompanyDescription(e.target.value)}
                  />
                  <Input
                    type="number"
                    label="CGPA"
                    value={companyCgpa}
                    onChange={(e) => setCompanyCgpa(e.target.value)}
                  />
                  <Input
                    type="text"
                    label="Branch"
                    value={companyBranch}
                    onChange={(e) => setCompanyBranch(e.target.value)}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-4">
                  <Button
                    type="Button"
                    variant="flat"
                    color="secondary"
                    onClick={addCompany}
                    className="mb-2"
                  >
                    Add
                  </Button>
                  <Button
                    type="Button"
                    variant="flat"
                    color="danger"
                    onClick={() => setShowModal(false)}
                    className="mb-2 mr-2"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

















