import React, { useContext, useEffect, useState } from "react";
import { UserGlobalContext } from "../../../context/userContext/UserState";

const UsersPanel = () => {
  const context = useContext(UserGlobalContext);
  const {
    GetAllUsers,
    DeleteUserById,
    SetCurrentUser,
    ClearCurrentUser,
    currentUser,
    UpdateUserById
  } = context;
  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    gender: "",
    birthDay: "",
    image: "",
    isAdmin: "",
    isDoctor: "",
  });

  useEffect(() => {
    ClearCurrentUser();
    GetAllUsers();
  }, []);
    
    useEffect(() => {
        if(currentUser!==null){
            setstate({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                email: currentUser.email,
                password: currentUser.password,
                mobileNumber: currentUser.mobileNumber,
                gender: currentUser.gender,
                birthDay: currentUser.birthDay,
                image: currentUser.image,
                isAdmin: currentUser.isAdmin,
                isDoctor: currentUser.isDoctor,
            })
        }else{
            setstate({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                mobileNumber: "",
                gender: "",
                birthDay: "",
                image: "",
                isAdmin: "",
                isDoctor: "",
            })
        }
    }, [currentUser])

  const DeleteHandler = (id) => {
    DeleteUserById(id);
    GetAllUsers();
    ClearCurrentUser();
    };

    const OnChangeHandler =(e)=>{
        setstate({...state,[e.target.name]:e.target.value})
    }
    
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        UpdateUserById(currentUser._id, state)
        GetAllUsers()
        ClearCurrentUser()
    }

  while (context.users === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="panel-sec">
      <div>
        <table>
          <thead>
            <tr>
              <th>firstName</th>
              <th>LastName</th>
              <th>email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {context.users === [] ? (
              <p>No users..</p>
            ) : (
              context.users.map((user) => {
                return (
                  <tr key={user._id}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.email}</td>
                    <td>{user.mobileNumber}</td>
                    <td>
                      <button onClick={() => DeleteHandler(user._id)}>
                        ❎
                      </button>
                      <button onClick={() => SetCurrentUser(user)}>🖋</button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div>
        <form onSubmit={OnSubmitHandler}>
          <div>
            <label>FirstName</label>
                      <input type="text" name="firstName" value={state.firstName} onChange={OnChangeHandler} />
          </div>
          <br />
          <div>
            <label>LastName</label>
            <input type="text" name="lastName" value={state.lastName} onChange={OnChangeHandler} />
          </div>
          <br />
          <div>
            <label>Email</label>
            <input type="text" name="email" value={state.email}  onChange={OnChangeHandler}/>
                  </div>
                  <br />
                  <div>
            <label>Mobile</label>
            <input type="number" name="mobileNumber" value={state.mobileNumber} onChange={OnChangeHandler} />
          </div>
                  <div>
                      <br/>
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersPanel;
