import { TouchableOpacity } from "react-native";
import { styles } from "./style";
import { ButtonProps } from "./ButtonProps";

export default function Button({ children, action }: ButtonProps) {
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.padding4} onPress={action} >
            {children}
        </TouchableOpacity>
    )
}