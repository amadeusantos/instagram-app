import { View, Image } from "react-native";
interface PerfilProps {
    image: string;
    size: number;
}

export default function Perfil({ image, size }: PerfilProps) {
    return (
        <View>
            <Image source={{uri: image}} style={{ width: size, height: size, borderRadius: 30 }} />
        </View>
    )
}