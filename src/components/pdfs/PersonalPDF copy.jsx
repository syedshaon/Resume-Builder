// pdf-sections/PersonalPDF.js
import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

// Style for PDF rendering
// Design 5
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
    borderColor: "#eaeaea",
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
    textAlign: "center",
  },
  title: {
    fontSize: 14,
    marginBottom: 6,
    color: "#333",
  },
  intro: {
    marginBottom: 12,
    fontSize: 11,
    lineHeight: 1.4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  contact: {
    marginTop: 10,
    gap: 4,
  },
  contactItem: {
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  icon: {
    marginRight: 6,
  },
});

const PersonalPDF = ({ personalInfo }) => {
  const { name, title, intro, avatar, showAvatar, email, phone, website, address } = personalInfo || {};
  const currentDesign = "Design5"; // Example design name, can be dynamic based on user preference

  return (
    <View style={styles.container}>
      {currentDesign !== "Design5" || (currentDesign !== "Design2" && showAvatar && avatar && <Image alt="image" src={avatar} style={styles.avatar} />)}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.intro}>{intro}</Text>

      <View style={styles.contact}>
        {email && (
          <View style={styles.contactItem}>
            <Text style={styles.icon}>✉️</Text>
            <Text>{email}</Text>
          </View>
        )}
        {phone && (
          <View style={styles.contactItem}>
            <Text style={styles.icon}>📞</Text>
            <Text>{phone}</Text>
          </View>
        )}
        {website && (
          <View style={styles.contactItem}>
            <Text style={styles.icon}>🌐</Text>
            <Text>{website}</Text>
          </View>
        )}
        {address && (
          <View style={styles.contactItem}>
            <Text style={styles.icon}>🏠</Text>
            <Text>{address}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default PersonalPDF;
