import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import {
  Color,
  FontSize,
  Padding,
  Border,
  StyleVariable,
} from "../../GlobalStyles";
import { avatarUsers } from "../../Urlavataruses";

const Card = ({ names, avatarUrl, dates, id, surnames, cosam }) => {
  const [fontsLoaded] = useFonts({
    "SFProDisplay-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });

  const url = avatarUsers.filter((user) => user.id === id)[0].url;
  const url2 = "../assets/photos/avatars-light-version@3x.png";

  if (!fontsLoaded) {
    return null;
  }
  if (dates.length > 1) {
    dates.map((date, index) => {
      console.log(`index: ${index}`);
      console.log(`${JSON.stringify(avatarUsers[index])}`);
      console.log("url: " + url);
    });
    return dates.map((date, index) => (
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
                source={require("../../assets/avatars-light-version.png")}
                // source={require("../assets/avatars-light-version@3x.png")}
                // source={require(`${avatarUsers}`)}
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
    ));
  } else {
    return (
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
                source={require("../../assets/avatars-light-version.png")}
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
              <Text style={[styles.text, styles.hrsTypo]}>{dates[0].day}</Text>
            </View>
            <View style={[styles.hour, styles.datePosition]}>
              <Text style={[styles.hrs, styles.hrsTypo]}>{dates[0].hour}</Text>
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
    );
  }
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
