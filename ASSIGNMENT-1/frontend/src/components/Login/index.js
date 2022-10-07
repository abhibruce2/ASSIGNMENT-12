import React, { useState } from "react";
import Button from "../Button";
import Select from "../Select";
import AddModal from "../Modal";
import Table from "../Table";
import Text from "../Text";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isOpen, setIsOpen] = useState(false);
const [values, setValues] = useState();

let navigate = useNavigate ()


//   const _toggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const options = [
//     {
//       label: "Client 1",
//       value: "Client-1",
//     },
//     {
//       label: "Client 2",
//       value: "Client-2",
//     },
//     {
//       label: "Manager",
//       value: "Manager",
//     },
//   ];



//   const handleSubmit =() => {
//     if(values.status.value ="client-1"){
// return navigate('/table', {replace: true});
//     }
//     if(values.status.value == "client-2"){
//         return navigate('/table', {replace: true});
//     }
//     if(values.status.value == "manager"){
//         return navigate('/table', {replace: true});
//   }

//   }
//   const initialValues = {

//     status: "",
//   };
const toggle = () => {
    setIsOpen(!isOpen);
  };

  const initialValues = {
email : "",
password : ""
  };

  const addForm = (
	<div className="mt-2 mb-3">
	<div>
	  <Text
		name="email"
		label="Email"
		placeHolder="Enter Your ID"
		fontBolded
		error=""
		required={true}
	  />
	</div>
	<div>
	  <Text
		name="password"
		label="password"
		placeHolder="Enter Your ID"
		fontBolded
		error=""
		required={true}
	  />
	</div>

	</div>
  );

  const formFooter = (
    <div className="container-fluid">
      <div className="col-sm-12 text-center">
        <Button
          type="submit"
          label="Login"
          className="ml-3 h6-5-important"
          
          onClick={() => {    
            setIsOpen(!isOpen);
        navigate('/table') 
        }
          } 
        ></Button>
      </div>
    </div>
  );

  return (

	<><AddModal
		  isOpen={isOpen}
		  toggle={toggle}
		  toggleModalClose={toggle}
		  modalTitle="Enter your Login Details"
		  modalBody={addForm}
		  modalFooter={formFooter}
		  hideDefaultButtons
		  onSubmit={(values) => {
			  console.log(values);
			  //   handleSubmit(values);
			  //   setValues(values);
		  } }
		  initialValues={initialValues} />

		  <h4>For Login Tap on Login</h4>
		  <button onClick={toggle}>Login </button>
		  </>
  );
}

export default Login;



