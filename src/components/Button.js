import {Text, TouchableOpacity} from "react-native";

export default function Button(props) {

    return (
    <TouchableOpacity key={props.index} onPress={props.onPress} style={props.style}>
        <Text style={props.textStyle}>{props.name}</Text>
    </TouchableOpacity>
    );
}