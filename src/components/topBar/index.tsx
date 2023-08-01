import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Button from "../button";
import { styles } from "./style";

export default function TopBar() {
  return (
    <View
      style={styles.container}
    >
      <Button>
        <Ionicons name="camera-outline" size={32} color="black" />
      </Button>
      <Text
        style={styles.logo}
      >
        Instagram
      </Text>
      <View style={styles.row}>
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
