import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { styles } from "./style";

interface BottonProps {
    children: ReactNode;
    action?: () => void;
}

export default function Button({ children, action }: BottonProps) {
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.padding4} onPress={action} >
            {children}
        </TouchableOpacity>
    )
}