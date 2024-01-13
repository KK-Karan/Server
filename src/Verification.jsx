

import { useState } from "react"
import { Input , Textarea , Button} from "@nextui-org/react"
function Verification() {
  let name = "Naman"
  let enrollment = "21232122"
  let branch= "Electrical"


  const [showModal, setShowModal] = useState(false);
    return (
      <>
      <div>
         <div>
         <p className="verification__status">Pending</p>
         <div className="verification__info something">
              <p>{name}</p>
              <p>{enrollment}</p>
              <p>{branch}</p>
              <Button onClick={() => setShowModal(true)}>Verify</Button>
         </div>
         </div>
         <p className="verification__status">Verified</p>
        <div className="verification__info">
              <p>Name</p>
              <p>Enrollment</p>
              <p>Branch</p>
              <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
               </svg>
              </p>
        </div>
          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto verification__modal">
                  <div className="verification__resume">
                     
                  </div>
                  <div className="verification__form">
                    <Input type="text" label="Name"></Input>
                    <Input type = "number" label="Enrollment no"></Input>
                    <Input type = "text" label = "Branch"></Input>
                    <Input type = "number" label = "CGPA"></Input>
                    <Textarea label = "Description"></Textarea>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-4">
                  <Button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="Button"
                    variant = "flat"
                    color = "secondary"
                    onClick={() => setShowModal(false)}
                  >
                    On Chain
                  </Button>
                  <Button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="Button"
                    variant = "flat"
                    color = "danger"
                    onClick={() => setShowModal(false)}
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
      </div>
      </>
    )
  }
  
  export default Verification

