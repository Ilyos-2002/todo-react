import { useState } from "react";
import { Table } from "./components/Table";
import { Form } from "./components/Form";


let data = [

  {
    id: 1,
    task: "bjhscskjbvk",

  },

]

function App() {
  let [userData, setUserData] = useState(data)


  const removeUser = (index) => {
    let newData = userData.filter((user, ind) => ind !== index)
    setUserData(newData)

  }
  return (
    <>
      <Form userData={userData} setData={setUserData} />
      <Table userData={userData} removeUser={removeUser} />
    </>


























    // pTag
    //   <section>
    //     <div >
    //       <h1>
    //         Salom kursdosglar
    //       </h1>
    //     </div>
    //   </section>
    // );
  )
}

export default App;
