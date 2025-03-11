import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItemStyling}>
      <Pressable
        android_ripple={{ color: "#5e0acc" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalItemTextStyling}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItemStyling: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemTextStyling: {
    color: "white",
  },
});
