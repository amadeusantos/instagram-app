import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient"
import Perfil from "../perfil";
import Button from "../button";

interface StoryProps {
    image: string;
    name: string;
}

export default function Story({ image, name }: StoryProps) {
    return (
      <Button>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <LinearGradient colors={ ['#833ab4', '#fd1d1d', '#fcb045'] } style={{ borderRadius: 30, padding: 2 }}>
            <Perfil image={image} size={64} />
        </LinearGradient>
        <Text>{name}</Text>
        </View>
      </Button>
    )
  }