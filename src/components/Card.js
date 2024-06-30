import React, { useState } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import {
  Color,
  FontSize,
  Padding,
  Border,
  StyleVariable,
} from "../../GlobalStyles";
import { avatarUsers } from "../../Urlavataruses";
import ModalTime from "./ModalTime";

const Card = ({ names, avatarUrl, dates, id, surnames, cosam }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const [fontsLoaded] = useFonts({
    "SFProDisplay-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });
  const images = {
    "1a7a17d3-8325-4c27-bb2d-f3f00e2ef7c6": require("../../assets/photos/user_1.jpg"),
    "2b8431c7-4870-46d1-a074-d9cf4c7d5e76": require("../../assets/photos/user_2.jpg"),
    "3c6a5ff1-5d6a-459e-bd2a-4bcbcd8b4edf": require("../../assets/photos/user_3.jpg"),
    "4d8f04f4-8594-4b24-85d1-bce242645a1b": require("../../assets/photos/user_4.jpg"),
    "5e0c2354-d362-4847-88dc-4e2d07e26e15": require("../../assets/photos/user_5.jpg"),
    "6f2e688c-3e4a-47d7-8cf4-d8a7e44cf4ee": require("../../assets/photos/user_6.jpg"),
    "7b12f477-520b-4f97-a889-2b3736427c58": require("../../assets/photos/user_7.jpg"),
    "8c45f76a-77ac-4813-ba35-29d7e6f9d29c": require("../../assets/photos/user_8.jpg"),
  };
  const url = avatarUsers.filter((user) => user.id === id)[0].url;
  const url2 = "../assets/photos/avatars-light-version@3x.png";

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      {dates.length > 1 ? (
        dates.map((date, index) => (
          <View key={id + date.day + date.type} style={styles.fullContainer}>
            <View style={[styles.avatarCard45Small, styles.contentLayer3Bg]}>
              <View style={[styles.frameParent, styles.frameParentFlexBox]}>
                <View style={[styles.vectorWrapper, styles.frameChildPosition]}>
                  <Image
                    style={[styles.frameChild, styles.frameChildPosition]}
                    contentFit="cover"
                    source={require("../../assets/rectangle-1.png")}
                  />
                </View>
                <View style={[styles.vectorWrapper, styles.frameChildPosition]}>
                  <Image
                    style={styles.avatarsLightVersion}
                    contentFit="cover"
                    source={images[id]}
                  />
                </View>
              </View>
              <View style={styles.contentLayer}>
                <Text
                  style={styles.diegoNeira}
                >{`${names[0]} ${surnames[0]}`}</Text>
              </View>
              <View style={styles.terapiaOcupacionalWrapper}>
                <Text style={[styles.terapiaOcupacional, styles.reagendarTypo]}>
                  {`${date.type}`}
                </Text>
              </View>
              <View style={[styles.contentLayer3, styles.contentFlexBox]}>
                <View style={[styles.date, styles.datePosition]}>
                  <Text style={[styles.text, styles.hrsTypo]}>{date.day}</Text>
                </View>
                <View style={[styles.hour, styles.datePosition]}>
                  <Text style={[styles.hrs, styles.hrsTypo]}>{date.hour}</Text>
                </View>
                <View style={[styles.cosam, styles.datePosition]}>
                  <Text style={[styles.hrsTypo]}>{cosam}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => {
                  console.log("Reangeda");
                  setIsModalOpen(!isModalOpen);
                  setDataModal(date);
                }}
              >
                <View style={styles.contentLayer4}>
                  <Image
                    style={styles.timecalendarTickIcon}
                    contentFit="cover"
                    source={require("../../assets/timecalendartick.png")}
                  />
                  <Text style={[styles.reagendar, styles.reagendarTypo]}>
                    Reagendar
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.fullContainer}>
          <View style={[styles.avatarCard45Small, styles.contentLayer3Bg]}>
            <View style={[styles.frameParent, styles.frameParentFlexBox]}>
              <View style={[styles.vectorWrapper, styles.frameChildPosition]}>
                <Image
                  style={[styles.frameChild, styles.frameChildPosition]}
                  contentFit="cover"
                  source={require("../../assets/rectangle-1.png")}
                />
              </View>
              <View style={[styles.vectorWrapper, styles.frameChildPosition]}>
                <Image
                  style={styles.avatarsLightVersion}
                  contentFit="cover"
                  source={images[id]}
                />
              </View>
            </View>
            <View style={styles.contentLayer}>
              <Text
                style={styles.diegoNeira}
              >{`${names[0]} ${surnames[0]}`}</Text>
            </View>
            <View style={styles.terapiaOcupacionalWrapper}>
              <Text style={[styles.terapiaOcupacional, styles.reagendarTypo]}>
                {`${dates[0].type} - ${cosam}`}
              </Text>
            </View>
            <View style={[styles.contentLayer3, styles.contentFlexBox]}>
              <View style={[styles.date, styles.datePosition]}>
                <Text style={[styles.text, styles.hrsTypo]}>
                  {dates[0].day}
                </Text>
              </View>
              <View style={[styles.hour, styles.datePosition]}>
                <Text style={[styles.hrs, styles.hrsTypo]}>
                  {dates[0].hour}
                </Text>
              </View>
            </View>
            <View style={styles.contentLayer4}>
              <Image
                style={styles.timecalendarTickIcon}
                contentFit="cover"
                source={require("../../assets/timecalendartick.png")}
              />
              <Text style={[styles.reagendar, styles.reagendarTypo]}>
                Reagendar
              </Text>
            </View>
          </View>
        </View>
      )}
      <ModalTime
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        id={id}
        dataModal={dataModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentLayer3Bg: {
    overflow: "hidden",
    backgroundColor: Color.baseBaseWhite,
  },
  frameParentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  frameChildPosition: {
    zIndex: 0,
    width: 392,
    position: "absolute",
  },
  reagendarTypo: {
    fontSize: FontSize.size_base,
    fontFamily: "SFProDisplay-Regular",
    fontWeight: "700",
  },
  contentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  datePosition: {
    padding: Padding.p_3xs,
    borderRadius: Border.br_xl,
    backgroundColor: Color.primaryColorsPrimaryColor500,
    height: 34,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  hrsTypo: {
    fontSize: FontSize.size_2xs,
    color: Color.baseBaseWhite,
  },
  frameChild: {
    top: -57,
    height: 67,
    zIndex: 0,
  },
  vectorWrapper: {
    top: 47,
    height: 15,
    zIndex: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarContainer: {
    flex: 1,
    justifyContent: "center",
  },
  avatarsLightVersion: {
    borderRadius: StyleVariable.shapesOrRoundedRoundedScale10,
    height: 84,
    zIndex: 1,
    width: 84,
    position: "absolute",
    left: "30%",
  },
  frameParent: {
    height: 95,
    flexDirection: "row",
    width: 392,
    justifyContent: "center",
  },
  diegoNeira: {
    fontSize: FontSize.size_5xl,
    color: Color.colorGray,
    textAlign: "left",
    fontFamily: "SFProDisplay-Regular",
    fontWeight: "700",
  },
  contentLayer2: {
    alignItems: "center",
    flexDirection: "row",
  },
  contentLayer: {
    justifyContent: "center",
    alignItems: "center",
  },
  terapiaOcupacional: {
    color: Color.primaryColorsPrimaryColor500,
    textAlign: "center",
  },
  terapiaOcupacionalWrapper: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: Color.baseBaseWhite,
    textAlign: "left",
  },
  date: {
    justifyContent: "center",
  },
  hrs: {
    width: 50,
    fontFamily: "SFProDisplay-Regular",
    color: Color.baseBaseWhite,
    textAlign: "center",
  },
  hour: {
    marginLeft: 12,
    width: 68,
    zIndex: 1,
  },
  cosam: {
    marginLeft: 12,
    width: "auto",
  },
  contentLayer3: {
    height: 56,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.baseBaseWhite,
  },
  timecalendarTickIcon: {
    width: 18,
    height: 18,
  },
  reagendar: {
    letterSpacing: 0.3,
    marginLeft: 10,
    color: Color.baseBaseWhite,
    textAlign: "left",
  },
  contentLayer4: {
    backgroundColor: Color.primaryColorsPrimaryColor500,
    padding: Padding.p_base,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  avatarCard45Small: {
    top: 33,
    left: 19,
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(120, 132, 149, 0.05)",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 320,
    position: "absolute",
    backgroundColor: Color.baseBaseWhite,
  },
  fullContainer: {
    paddingBottom: 280,
  },
});

export default Card;
