import React, { useEffect, useState } from "react";
import AddModal from "./Modal";
import Text from "./Text";
import Select from "./Select";
import Button from "./Button";
import axios from "axios";
import Url from "./Url";

function Table() {
  const [orders, setOrders] = useState();
  console.log("orders___________________________",orders);
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState();
  const [updateValues, setUpdateValues] = useState();
  const [ postId, setPostId] = useState();
  const [updatePost , setUpdatePost] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/list" )
      .then((response) => setOrders(response.data.rows));
  }, []);

//  useEffect (() => {

//  const handleUpdate = async () => {
//     const requestOptions = {
//       method :'PUT',
//       headers : { 'Content-Type' : 'application/json'},
//       body: JSON.stringify({ updateValues})
//     };
//     const response = await fetch(`https://localhost:5000/api/update/1`,requestOptions);
//     const data = await response.json();

// setPostId(data.id);
//   }

//   handleUpdate();
//  }, [])







  const handleSubmit = async (e) => {
    try {
      const resp = await axios.post("http://localhost:5000/api/post", {
        id: values.id,
        user_id: values.user_id,
        product_name: values.product_name,
        status: values.status.value,
        created_date: values.created_date
      });
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  };


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const _toggle = () => {
    setOpen(!open);
  };

  const initialValues = {
    id: orders && orders.length > 0? orders.length +1 : 1 ,
    user_id : 1,
    product_name: "",
    status: "",
    created_date: new Date(),
  };
console.log(initialValues);

  const options = [
    {
      label: "Pending",
      value: "Pending",
    },
    {
      label: "Delivered",
      value: "Delivered",
    },
  ];

  const addForm = (
    <div className="mt-2 mb-3">
      <div>
        <Text
          name="product_name"
          label="Product Name"
          placeHolder="Enter Your ID"
          fontBolded
          error=""
          required={true}
        />
      </div>
      <div>
      <Select
          name="status"
          label="Status"
          placeholder="Select Status..."
          options={options}
          error=""
          fontBolded
          required={true}
        />      </div>
 
    </div>
  );

  const editForm = (
    <div className="mt-2 mb-3">
      <div>
        <Select
          name="status"
          label="Status"
          placeholder="Select Status..."
          options={options}
          error=""
          fontBolded
          required={true}
        />
      </div>
      <div>
        <Text
          name="comments"
          label="Comments"
          placeHolder="Type A comment"
          fontBolded
          error=""
          required={true}
        />
      </div>
    </div>
  );

  const editFormFooter = (
    <div className="container-fluid">
      <div className="col-sm-12 text-center">
        <Button
          type="submit"
          label="Edit"
          className="ml-3 h6-5-important"
          onClick={_toggle}
        ></Button>
      </div>
    </div>
  );

  const formFooter = (
    <div className="container-fluid">
      <div className="col-sm-12 text-center">
        <Button
          type="submit"
          label="Add"
          className="ml-3 h6-5-important"
          onClick={toggle}
        ></Button>
      </div>
    </div>
  );

  
  return (
    <>
      <AddModal
        isOpen={isOpen}
        toggle={toggle}
        toggleModalClose={toggle}
        modalTitle="Add New"
        modalBody={addForm}
        modalFooter={formFooter}
        hideDefaultButtons
        onSubmit={(values) => {
          console.log(values);
          handleSubmit(values);
          setValues(values);
        }}
        initialValues={initialValues}
      />

      <AddModal
        isOpen={open}
        toggle={_toggle}
        toggleModalClose={_toggle}
        modalTitle="Edit"
        modalBody={editForm}
        modalFooter={editFormFooter}
        hideDefaultButtons
        onSubmit={(values) => {        
          setUpdateValues(values);
        }}
        initialValues={initialValues}
      />
      <Button className="m-2" onClick={toggle} label="Create" />

      <table className="table table-stripeds">
        <thead>
          <tr>
            <th scope="col">Order_Id</th>
            <th scope="col">User_Id</th>
            <th scope="col">Product_name</th>
            <th scope="col">status</th>
            <th scope="col">Created_date</th>
          </tr>
        </thead>
        <tbody>
          {orders && orders.length > 0 ?
          orders.map(order => (
            <tr>
            <td>{order.id}</td>
            <td>
              {order.user_id}
            </td>
            <td>
              {order.product_name}
            </td>
            <td>
              {order.status}
              <Button className="btn-sm m-2"
               onClick={() => {    
               setOpen(!open);
               setUpdateValues(orders);}
               } label="Edit"
                />
            </td>
            <td>{order.created_date}</td>
            
          </tr>       

          )) : ""
         
            }
          </tbody>
      </table>
    </>
  );
}

export default Table;
