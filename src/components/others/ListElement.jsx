import { useAuthContext } from "@/context/AuthContext";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  descriptionSingle: {
    fontSize: 11,
    marginBottom: 2,

    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
});

function ListElement({ iconElement, index = 0, item }) {
  console.log("iconElement : ", iconElement);

  if (iconElement === "check") {
    return (
      <View style={styles.descriptionSingle} key={index}>
        <Image alt="circle" src="/check.png" style={{ width: 10, height: 10 }} />
        <Text style={{ paddingLeft: 5 }}>{item}</Text>
      </View>
    );
  }
  if (iconElement === "chevrons-right") {
    return (
      <View style={styles.descriptionSingle} key={index}>
        <Image alt="circle" src="/chevrons-right.png" style={{ width: 10, height: 10 }} />
        <Text style={{ paddingLeft: 5 }}>{item}</Text>
      </View>
    );
  }

  if (iconElement === "circle-check") {
    return (
      <View style={styles.descriptionSingle} key={index}>
        <Image alt="circle" src="/circle-check.png" style={{ width: 10, height: 10 }} />
        <Text style={{ paddingLeft: 5 }}>{item}</Text>
      </View>
    );
  }

  if (iconElement === "shell") {
    return (
      <View style={styles.descriptionSingle} key={index}>
        <Image alt="circle" src="/shell.png" style={{ width: 10, height: 10 }} />
        <Text style={{ paddingLeft: 5 }}>{item}</Text>
      </View>
    );
  }

  if (iconElement === "square-check") {
    return (
      <View style={styles.descriptionSingle} key={index}>
        <Image alt="circle" src="/square-check.png" style={{ width: 10, height: 10 }} />
        <Text style={{ paddingLeft: 5 }}>{item}</Text>
      </View>
    );
  }

  if (iconElement === "circle-dot") {
    return (
      <View style={styles.descriptionSingle} key={index}>
        <Image alt="circle" src="/circle-dot.png" style={{ width: 10, height: 10 }} />
        <Text style={{ paddingLeft: 5 }}>{item}</Text>
      </View>
    );
  }

  return null; // Fallback if no icon matches
}

export default ListElement;
