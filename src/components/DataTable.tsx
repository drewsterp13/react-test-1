import React from 'react'
import Modal from "@mui/material/Modal";

interface booleanProp {
    isUser: boolean;
  }

export default function DataTable( prop: booleanProp ) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log(prop.isUser)

    if (prop.isUser == true) {
        return (
            <div className="flex flex-col align-center">
                <div>
                    {/* OBVIOUSLY, these are not functional buttons */}
                    <button className="bg-gray-500 text-black m-3 p-1 rounded hover:bg-gray-800 hover:text-white">add new car</button>
                    <button className="bg-gray-500 text-black m-3 p-1 rounded hover:bg-gray-800 hover:text-white">update car</button>
                    <button className="bg-gray-500 text-black m-3 p-1 rounded hover:bg-red-700 hover:text-white" onClick={handleOpen}>delete car</button>
                    <Modal className="flex flex-col items-center" open={open} onClose={handleClose}>
                        <div className="text-center bg-gray-800 text-white h-24 w-80 inset-0">
                            <h1 className="text-xl bg-gray-900">Are you sure you want to delete?</h1>
                            <div className="flex flex-row justify-center">  
                                <button className="bg-red-600 text-black m-3 p-1 rounded hover:bg-red-700 hover:text-white w-12" onClick={handleClose}>yes</button>
                                <button className="bg-gray-200 text-black m-3 p-1 rounded hover:bg-gray-400 hover:text-black w-12" onClick={handleClose}>no</button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
          )
    } else { return ( <div className="items-center text-center flex flex-col"><h1 className="text-2xl font-bold text-red-700">Sorry, you do not have access to data</h1></div> ) }
    
}
