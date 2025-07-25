// Example of one of these components:
// pdf-sections/ExperiencePDF.js
import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    fontSize: 11,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
    borderBottom: "2px solid #eaeaea",
    paddingBottom: 10,
  },

  item: {
    marginBottom: 15,
    display: "flex",

    flexDirection: "row",
    flexWrap: "wrap",
  },
  intro: {
    width: "50%",
  },

  referer: {
    marginBottom: 3,
    fontWeight: "bold",
  },
  refererTitle: {
    fontStyle: "italic",
    marginBottom: 3,
  },
});

const ReferencesPDF = ({ references }) => {
  console.log("ReferencesPDF component rendered with referrence:", references);
  // if references.map => item visible is false, then return null

  if (references.length === 0 || !references.some((item) => item.visible)) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{"References"}</Text>
      <View style={styles.item}>
        {references.map((item, index) =>
          item.visible ? (
            <View key={index} style={styles.intro}>
              {item.referer && <Text style={styles.referer}>{item.referer}</Text>}
              {item.title && <Text style={styles.refererTitle}>{item.title}</Text>}
              {item.phone && <Text style={styles.phone}>{item.phone}</Text>}
            </View>
          ) : null
        )}
      </View>
    </View>
  );
};

export default ReferencesPDF;
