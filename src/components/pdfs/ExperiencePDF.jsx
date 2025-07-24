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
  intro: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  introColLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  introCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
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
  },

  company: {
    marginBottom: 2,
    fontWeight: "bold",
  },
  position: {
    fontStyle: "italic",
    marginBottom: 2,
  },
  date: {
    marginBottom: 2,
  },
  description: {
    marginTop: 3,
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

const ExperiencePDF = ({ experience }) => {
  console.log("Experience Data:", experience);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{experience.title || "Experience"}</Text>
      {experience.map((item, index) => {
        if (item.company) {
          return (
            <View key={index} style={styles.item}>
              <View style={styles.intro}>
                <View style={styles.introColLeft}>
                  <Text style={styles.company}>{item.company}</Text>
                  <Text style={styles.position}>{item.jobTitle}</Text>
                </View>
                <View style={styles.introCol}>
                  <Text style={styles.date}>
                    {item.startDate} - {item.endDate || "Present"}
                  </Text>
                  <Text>{item.location}</Text>
                </View>
              </View>
              <View style={styles.description}>
                {Array.isArray(item.summary) &&
                  item.summary.map((summaryItem, summaryIndex) => (
                    <View style={styles.descriptionSingle} key={summaryIndex}>
                      <Image alt="circle" src="/circle-dot.png" style={{ width: 10, height: 10 }} />
                      <Text style={{ paddingLeft: 5 }}>{summaryItem}</Text>
                    </View>
                  ))}
              </View>
            </View>
          );
        }

        if (item.break) {
          return (
            <View
              key={`exp-${item.id}`}
              style={{
                height: "30px",
                display: item.visible ? "block" : "none",
              }}
            ></View>
          );
        }

        return null; // fallback for items that are neither company nor break
      })}
    </View>
  );
};

export default ExperiencePDF;
