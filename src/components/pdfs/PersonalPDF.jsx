// pdf-sections/PersonalPDF.js
import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

// Design 5
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
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
    textAlign: "center",
  },
  intro: {
    marginBottom: 12,
    fontSize: 11,
    lineHeight: 1.4,
    textAlign: "center",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  contact: {
    marginTop: 10,
    fontSize: 11,
    gap: 4,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contactItem: {
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});

const PersonalPDF = ({ personalInfo, design }) => {
  const { name, title, intro, avatar, showAvatar, email, phone, website, address } = personalInfo || {};
  console.log("personal Info:", personalInfo);
  console.log("design:", design);

  if (design === "Design1") {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.intro}>{intro}</Text>
          </View>
          <View>{showAvatar && avatar && <Image src={avatar} style={styles.avatar} alt="Avatar" />}</View>
        </View>

        <View style={styles.contact}>
          {email && (
            <View style={styles.contactItem}>
              <Image alt="email" src="/mail.png" style={{ width: 10, height: 10 }} />
              <Text>{email}</Text>
            </View>
          )}
          {phone && (
            <View style={styles.contactItem}>
              <Image alt="phone" src="/phone.png" style={{ width: 10, height: 10 }} />
              <Text>{phone}</Text>
            </View>
          )}

          {address && (
            <View style={styles.contactItem}>
              <Image alt="address" src="/house.png" style={{ width: 10, height: 10 }} />
              <Text>{address}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  if (design === "Design5") {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.intro}>{intro}</Text>

        <View style={styles.contact}>
          {email && (
            <View style={styles.contactItem}>
              <Image alt="email" src="/mail.png" style={{ width: 10, height: 10 }} />
              <Text>{email}</Text>
            </View>
          )}
          {phone && (
            <View style={styles.contactItem}>
              <Image alt="phone" src="/phone.png" style={{ width: 10, height: 10 }} />
              <Text>{phone}</Text>
            </View>
          )}

          {address && (
            <View style={styles.contactItem}>
              <Image alt="address" src="/house.png" style={{ width: 10, height: 10 }} />
              <Text>{address}</Text>
            </View>
          )}
        </View>
      </View>
    );
  }
  return null; // Return null if the design is not Design5
};

export default PersonalPDF;
