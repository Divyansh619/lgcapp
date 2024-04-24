import { FontAwesome5 } from "@expo/vector-icons";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const MyActivity = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 10,
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        alignSelf: "center",

      }}
    >

      <View>
        <View
          style={{
            backgroundColor: "#7DBE80",
            // marginHorizontal: 28,
            marginVertical: 10,
            padding: 20,
            borderRadius: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "#d5dbd6", fontSize: 16 }}>
                Balance Available
              </Text>
              <Text
                style={{ color: "white", fontSize: 24, fontFamily: 'Roboto-Bold' }}
              >
                - ₹91000
              </Text>
            </View>
            <View>
              <Image
                source={require("../../assets/logo-1.png")}
                style={{ height: 30, width: 30, borderRadius: 5 }}
              />
            </View>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text style={{ color: "white", fontSize: 16 }}>Mr. Avinash</Text>
            <Text style={{ color: "#fcfbdb", fontSize: 14 }}>
              Memeber Id - 1234
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={{ alignItems: 'center', textAlign: 'center', paddingVertical: 4, color: '#4DA2D6' }}>Add Money</Text>
        <View style={{ display: 'flex', flexDirection: 'row', paddingVertical: 8, justifyContent: "center" }}>

          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={"black"}
            style={{
              textAlign: 'center',
              padding: 10,
              paddingVertical: 4,
              borderRadius: 10,
            }}
          />
          <TextInput
            style={{
              fontSize: 18,
              color: 'black'
            }}
            placeholder="0"
          />
        </View>
        <View style={{ isplay: 'flex', flexDirection: 'row', justifyContent: "space-between", paddingVertical: 8, width: '70%', alignSelf: 'center' }}>
          <Text style={{ fontSize: 12, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 50, backgroundColor: '#EDEDED' }}>+1000</Text>
          <Text style={{ fontSize: 12, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 50, backgroundColor: '#EDEDED' }}>+2000</Text>
          <Text style={{ fontSize: 12, paddingHorizontal: 12, paddingVertical: 4, borderRadius: 50, backgroundColor: '#EDEDED' }}>+5000</Text>
        </View>
      </View>
      <TouchableOpacity style={{
        borderWidth:1,
        borderColor: '#34be82',
        padding: 12,
        borderRadius: 10,
        color:'#34be82',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
      }}>
        <Text style={{

          fontSize: 16,
          // fontWeight: 'bold',
          fontFamily: 'Roboto-Bold',
          color:'#34be82',
        }}>{"Pay now"}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default MyActivity;
