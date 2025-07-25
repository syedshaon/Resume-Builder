import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import ListElement from "../others/ListElement";

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottom: "2px solid #eaeaea",
    paddingBottom: 10,
  },
  list: {
    fontSize: 11,
    marginBottom: 5,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  descriptionSingle: {
    fontSize: 11,
    marginBottom: 2,

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
function SkillsPDF({ skills, iconElement }) {
  if (skills.skills.length === 0 || !skills.visible) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.list}>
        {skills.skills.map((element, index) => (
          <ListElement iconElement={iconElement} key={index} index={index} item={element} />
        ))}
      </View>
    </View>
  );
}

export default SkillsPDF;
