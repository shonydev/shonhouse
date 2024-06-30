import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState({});

  const updateDateById = (id, newDate) => {
    console.log("newdatae: ", newDate);
    setGlobalState((prevState) => {
      const updatedUsers = prevState.users.map((user) => {
        if (user.id === id) {
          const updatedDates = user.dates.map((date) => {
            if (date.type === newDate.type) {
              return newDate;
            }
            return date;
          });
          return { ...user, dates: updatedDates };
        }
        return user;
      });
      const dadita = { ...prevState, users: updatedUsers };
      console.log("dadita: ", JSON.stringify(dadita));
      return dadita;
    });
  };

  return (
    <AppContext.Provider
      value={{
        globalState,
        setGlobalState,
        updateDateById,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
