import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Button from "../button";

export default function TopBar() {
  return (
    <View
      style={{
        width: "100%",
        height: 64,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button>
        <Ionicons name="camera-outline" size={32} color="black" />
      </Button>
      <Text
        style={{
          fontSize: 20,
          justifyContent: "center",
          marginLeft: 40,
          fontWeight: "bold",
        }}
      >
        Instagram
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Button>
          <Ionicons name="tv-outline" size={32} color="black" />
        </Button>
        <Button>
          <Ionicons name="arrow-redo-outline" size={32} color="black" />
        </Button>
      </View>
    </View>
  );
}
