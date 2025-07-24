import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

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
function SkillsPDF({ skills }) {
  return (
    <View>
      <Text style={styles.title}>Skills</Text>
      <View style={styles.list}>
        {skills.skills.map((element, index) => (
          <View style={styles.descriptionSingle} key={index}>
            <Image alt="circle" src="/circle-dot.png" style={{ width: 10, height: 10 }} />
            <Text style={{ paddingLeft: 5 }}>{element}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

export default SkillsPDF;
