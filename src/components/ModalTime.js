import React, { useContext } from "react";
import { Text, Modal, View, Button } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AppContext } from "../context/AppContext";

export default function ModalTime({
  isModalOpen,
  isDarkMode,
  setIsModalOpen,
  id,
  dataModal,
}) {
  const { globalState, setGlobalState, updateDateById } =
    useContext(AppContext);
  const [date, setDate] = React.useState(new Date());
  const [showDate, setShowDate] = React.useState(false);
  const [showTime, setShowTime] = React.useState(false);

  React.useEffect(() => {
    if (isModalOpen) {
      setShowDate(true);
    }
  }, [isModalOpen]);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowDate(false);
    setShowTime(true); // Abre el modal de hora después de seleccionar la fecha
  };

  const onTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShowTime(false); // Cierra el modal de hora después de seleccionar la hora
    handleClose(currentDate);
  };

  const handleClose = (currentDate) => {
    setIsModalOpen(false);
    setShowDate(false);
    setShowTime(false);
    handleSave(currentDate);
  };

  const handleSave = (currentDate) => {
    // Aquí puedes usar el valor seleccionado de `date`
    console.log("Selected date/time: ", `${currentDate}`);
    console.log(
      "Selected date: ",
      `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`
    );

    const horas = currentDate.getHours();
    const minutos = currentDate.getMinutes();
    const segundos = currentDate.getSeconds();

    console.log(`Horas: ${horas}`);
    console.log(`Minutos: ${minutos}`);
    console.log(`Segundos: ${segundos}`);
    console.log("glovil: ", globalState);
    console.log("data: ", dataModal);
    console.log("id: ", id);
    console.log("fn: ", updateDateById);
    const payload = {
      type: dataModal.type,
      day: `${currentDate.getDate()}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`,
      hour: `${currentDate.getHours()}:${currentDate.getMinutes()} hrs`,
    };

    updateDateById(id, payload);
  };

  const modalContainerStyle = {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  };
  const modalStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    alignItems: "center",
    margin: 20,
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  };
  const titleStyle = {
    color: isDarkMode ? "white" : "black",
    fontSize: 20,
    fontWeight: "bold",
  };
  const buttonTime = {
    margin: 30,
  };

  return (
    <>
      <Modal visible={isModalOpen} transparent={true} animationType={"slide"}>
        <View style={modalContainerStyle}>
          {showDate && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onDateChange}
            />
          )}
          {showTime && (
            <DateTimePicker
              testID="timeTimePicker"
              value={date}
              mode="time"
              is24Hour={true}
              display="default"
              onChange={onTimeChange}
            />
          )}
        </View>
      </Modal>
    </>
  );
}
