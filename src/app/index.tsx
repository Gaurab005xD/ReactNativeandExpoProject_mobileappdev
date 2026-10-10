import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>gaurab_xd5</Text>

      <View style={styles.profileSection}>
        <View style={styles.profilePic} />

        <View style={styles.stats}>
          <View style={styles.statBox}>
            <Text style={styles.number}>5</Text>
            <Text style={styles.statText}>Posts</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.number}>296</Text>
            <Text style={styles.statText}>Followers</Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.number}>116</Text>
            <Text style={styles.statText}>Following</Text>
          </View>
        </View>
      </View>

      <Text style={styles.name}>Gaurab Sapkota</Text>
      <Text style={styles.bio}>Positive</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileButton}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topNav}>
        <View style={styles.smallCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.smallCircle} />
        <View style={styles.smallCircle} />
      </View>

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
        <Text style={styles.alertText}>Alert Button</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <View style={styles.navCircle} />
        <View style={styles.navCircle} />
        <View style={styles.navCircle} />
        <View style={styles.navCircle} />
        <View style={styles.navCircle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    paddingTop: 50,
  },

  username: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#666",
  },

  stats: {
    flexDirection: "row",
    gap: 20,
  },

  statBox: {
    alignItems: "center",
  },

  number: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  statText: {
    color: "#fff",
    fontSize: 14,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
  },

  bio: {
    color: "#fff",
    fontSize: 16,
    marginTop: 4,
    marginBottom: 20,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  profileButton: {
    flex: 1,
    backgroundColor: "#2a2d34",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  topNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },

  smallCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#888",
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  photoBox: {
    width: "32%",
    height: 120,
    backgroundColor: "#444",
    marginBottom: 8,
  },

  alertButton: {
    backgroundColor: "#3797ef",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  alertText: {
    color: "#fff",
    fontWeight: "bold",
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#333",
  },

  navCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#888",
  },
});
