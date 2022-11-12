import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useLocalStorage from "../customHooks/useLocalStorage";

const AppContext = React.createContext();

function AppProvider(props) {
  let navigate = useNavigate();
  let location = useLocation();
  //CONSTANTES
  const adminEmail = process.env.REACT_APP_FIREBASE_ADMIN_EMAIL;
  const adminPassword = process.env.REACT_APP_FIREBASE_ADMIN_PASSWORD;

  //algoritmo para local storege
  const [user, saveUser] = useLocalStorage("user", { valid: false });
  const [company, saveCompany] = useLocalStorage("company", {});
  const [members, saveMembers] = useLocalStorage("members", []);
  //ESTADOS
  const [loading, setLoading] = useState(false);
  // const [members, setMembers] = useState([
  //   // {
  //   //   id: "0",                                                         ok
  //   //   number: 2,                                                       ok
  //   //   img: "https://cdn-icons-png.flaticon.com/512/149/149071.png",    ok
  //   //   name: "sara maria",                                              ok
  //   //   lastName: "garcia dias",                                         ok
  //   //   address: "calle 10h #45s - 06",                                  ok
  //   //   email: "andrescalvo9407@gmail.com",                              ok
  //   //   neighborhood: "bonanza",                                         ok
  //   //   phone: "2886801",                                                ok
  //   //   cellPhone: "3146847924",                                         ok
  //   //   typeNid: "CC",                                                   ok
  //   //   nid: "1144178906",                                               ok
  //   //   placeOfNid: "cali",                                              ok
  //   //   birthDate: "07/17/1994",                                         ok
  //   //   placeOfBirth: "cali",                                            ok
  //   //   birthDepartment: "valle",                                        ok
  //   //   nacionality: "colombiana",                                       ok
  //   //   bloodType: "O+",                                                 ok
  //   //   maritalStatus: "casado",                                         ok
  //   //   idOfSpouse: "",
  //   //   numberOfChildren: 0,                                             ok
  //   //   registrationDate: "10/10/2022",                                  ok
  //   //   gender: "F",                                                     ok
  //   //   age: 23,                                                         ok
  //   //   profession: "electronico",                                       ok
  //   //   academicLevel: "tecnologo",                                      ok
  //   //   relatives: [],
  //   //   isBaptized: true,                                                ok
  //   //   baptizedDate: "10/10/2010",                                      ok
  //   //   whoBaptized: "julio valencia",                                   ok
  //   //   baptismChurch: "bajo aguacatal",                                 ok
  //   //   baptizedHere: false,                                             ok
  //   //   receivedPromise: true,                                           ok
  //   //   membershipStatus: true,                                          ok
  //   //   groups: [],
  //   //   position: "",                                                    ok
  //   // },
  // ]);
  const [filteredMembers, setFilteredMembers] = useState([]);

  //functions
  function capitalizeText(text) {
    let capitalText = text
      .toLowerCase()
      .trim()
      .split(" ")
      .map((v) => v[0].toUpperCase() + v.substring(1))
      .join(" ");
    return capitalText;
  }
  const currentDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`;

  return (
    <AppContext.Provider
      value={{
        navigate,
        location,
        //constantes
        adminEmail,
        adminPassword,
        //estados
        loading,
        setLoading,
        filteredMembers,
        setFilteredMembers,
        //localstorage
        user,
        saveUser,
        company,
        saveCompany,
        members,
        saveMembers,
        //fuctons
        capitalizeText,
        currentDate,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
