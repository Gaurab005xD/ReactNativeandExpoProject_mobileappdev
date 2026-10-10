import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>G.Sa</Text>

      <View style={styles.profileSection}>
        <View style={styles.profilePic} />

        <View style={styles.stats}>
          <View>
            <Text style={styles.number}>0</Text>
            <Text>Posts</Text>
          </View>

          <View>
            <Text style={styles.number}>0</Text>
            <Text>Followers</Text>
          </View>

          <View>
            <Text style={styles.number}>0</Text>
            <Text>Following</Text>
          </View>
        </View>
      </View>

      <Text style={styles.name}>Gaurab Sapkota</Text>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.buttonLabel}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.gridContainer}>
        <View style={styles.photoBox} />
        <View style={styles.photoBox} />
        <View style={styles.photoBox} />
        <View style={styles.photoBox} />
        <View style={styles.photoBox} />
        <View style={styles.photoBox} />
      </View>

      <TouchableOpacity
        style={styles.alertButton}
        onPress={() => Alert.alert("Alert Button pressed")}
      >
        <Text style={styles.alertText}>Alert</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffffff",
  },

  username: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 25,
  },

  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#d9d9d9",
  },

  stats: {
    flexDirection: "row",
    gap: 20,
  },

  number: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },

  name: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "600",
  },

  editButton: {
    marginTop: 15,
    backgroundColor: "#ececec",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonLabel: {
    fontWeight: "bold",
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 25,
  },

  photoBox: {
    width: "31%",
    height: 110,
    backgroundColor: "#d9d9d9",
    marginBottom: 10,
  },

  alertButton: {
    backgroundColor: "#3897f0",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },

  alertText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
