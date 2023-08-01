import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: { alignItems: "center", justifyContent: "center", marginBottom: 2 },
    body: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
      },
      top: { flexDirection: "row", alignItems: "center" },
      name: { alignItems: "flex-start", justifyContent: "flex-start"},
      nameText: { fontWeight: "500", fontSize: 16 },
      location: { fontSize: 10, marginTop: -10 },
      imagePost: { width: "100%", height: 400, borderRadius: 4 },
      bottom: {
        width: "100%",
        flexDirection: "row",
        paddingHorizontal: 6,
        paddingTop: 2,
        justifyContent: "space-between",
      },
      actions: { flexDirection: "row" },
      infos: { flexDirection: "row", alignItems: "center" },
      marginLeft4: { marginLeft: 4 },
      bold: { fontWeight: "bold" }
})