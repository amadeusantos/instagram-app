import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface BottonProps {
    children: ReactNode;
    action?: () => void;
}

export default function Button({ children, action }: BottonProps) {
    return(
        <TouchableOpacity activeOpacity={0.6} style={{ padding: 4 }} onPress={action} >
            {children}
        </TouchableOpacity>
    )
}