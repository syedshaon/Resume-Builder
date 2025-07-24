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
  gapStyle: {
    height: "10px",
    width: "100%",
  },
});

function OthersPDF({ otherInfo }) {
  return (
    otherInfo.some((item) => item.visible) &&
    otherInfo.map((other, index) =>
      !other.break ? (
        <View style={{ marginTop: "20px", display: other.visible ? "block" : "none" }} key={index}>
          <Text style={styles.title}>{other.title}</Text>
          <View>
            {/* Summary separated with semicolons are converted to a list */}
            {other.summary.map(
              (element, i) =>
                element && (
                  <View style={styles.descriptionSingle} key={i}>
                    <Image alt="circle" src="/circle-dot.png" style={{ width: 10, height: 10 }} />
                    <Text style={{ paddingLeft: 5 }}>{element}</Text>
                  </View>
                )
            )}
          </View>
        </View>
      ) : (
        <View key={`exp-${other.id}`} style={{ height: "20px", display: other.visible ? "block" : "none" }}></View>
      )
    )
  );
}

export default OthersPDF;
