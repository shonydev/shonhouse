import React, { useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";

const { width } = Dimensions.get("window");

const CustomCalendar = ({ month, year }) => {
  const date = new Date(year, month - 1, 1);
  const daysInMonth = new Date(year, month, 0).getDate();
  let firstDayOfMonth = date.getDay() - 1;
  if (firstDayOfMonth === -1) firstDayOfMonth = 6;

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const dayNames = ["L", "M", "X", "J", "V", "S", "D"]; // Días en español

  return (
    <View style={styles.calendarGrid}>
      {dayNames.map((day, index) => (
        <View key={`header-${index}`} style={styles.dayCell}>
          <Text style={[styles.dayNameText, styles.dayNameColor]}>{day}</Text>
        </View>
      ))}
      {Array.from({ length: firstDayOfMonth }, (_, i) => (
        <View key={`empty-${i}`} style={styles.dayCell} />
      ))}
      {days.map((day) => (
        <View key={day} style={styles.dayCell}>
          <View style={styles.dayContent}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const needsSixRows = (month, year) => {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  let firstDayIndex = firstDay - 1;
  if (firstDayIndex === -1) firstDayIndex = 6; // Ajuste para que la semana empiece en lunes

  const totalCells = firstDayIndex + daysInMonth;
  return totalCells > 35; // Si necesita más de 35 celdas, necesitará 6 filas
};

export const RandomScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  }, []);

  const currentYear = new Date().getFullYear();
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const cellWidth = (width - 50) / 3;
  const baseHeight = 130;
  const additionalHeight = 15;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.calendarContainer}>
        {months.map((monthName, index) => {
          const monthNumber = index + 1;
          const isSpecialMonth = needsSixRows(monthNumber, currentYear);
          const monthHeight =
            baseHeight + (isSpecialMonth ? additionalHeight : 0);
          return (
            <View
              key={monthName}
              style={[
                styles.monthContainer,
                { width: cellWidth, height: monthHeight },
              ]}
            >
              <Text style={styles.monthTitle}>{monthName}</Text>
              <CustomCalendar month={monthNumber} year={currentYear} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#825ced",
    paddingTop: 12,
  },
  calendarContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "flex-start",
    marginHorizontal: 20,
  },
  monthContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#EFF8FF",
    borderRadius: 10,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  monthTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 5,
  },
  calendarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  dayCell: {
    width: "14.28%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
  },
  dayContent: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    minWidth: 20,
    minHeight: 20,
  },
  dayNameText: {
    fontSize: 9,
    color: "#8E8E93",
    fontWeight: "500",
  },
  dayNameColor: {
    color: "#825ced", // Color deseado para los nombres de los días
  },
  dayText: {
    fontSize: 9,
    color: "#1C1C1E",
  },
});

export default RandomScreen;
