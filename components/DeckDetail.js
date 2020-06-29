import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class DeckDetail extends React.Component {
                 navigation = this.props.navigation;

                 handleClick = () => {
                   console.log("slfjslkjf");
                 };

                 render() {
                   console.log(this.props.navigation);
                   return (
                     <View>
                       {/* <Text>Decklissdfst</Text> */}
                       <View
                         style={{
                           flex: 1,
                           alignItems: "center",
                           justifyContent: "center"
                         }}
                       >
                         <Text>Home Screen</Text>
                         <Button
                           title="Go to Details"
                           onPress={this.handleClick}
                         />
                       </View>
                     </View>
                   );
                 }
               }

const styles = StyleSheet.create({});
