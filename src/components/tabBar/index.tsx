import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Perfil from "../perfil";
import { styles } from "./style";

interface TabBarProps {
    image: string
}

export default function TabBar({ image }: TabBarProps) {
    return (
        <View style={styles.container}>
            <Ionicons name="home-outline" size={32} color="black" />
            <Ionicons name="search-outline" size={32} color="black" />
            <Ionicons name="add" size={32} color="black" />
            <Ionicons name="heart-outline" size={32} color="black" />
            <Perfil image={image} size={32}/>
        </View>
    )
}