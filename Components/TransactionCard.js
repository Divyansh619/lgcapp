import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View } from "react-native";

const TransactionCard = () => {
  return (
    <View
      style={{
        width: "100%",
        padding: 10,
        backgroundColor: "white",

        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        alignSelf: "center",
        borderRadius: 10,
      }}
    >
      <View
        style={{
          marginVertical: 5,
          alignItems: "center",
          flexDirection: "row",

          borderRadius: 10,

          justifyContent: "space-between",
          shadowColor: "#FFFFFF", 
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={"#34be82"}
            style={{
              backgroundColor: "#C1F2B0",
              padding: 10,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingLeft: 4 }}>
            <Text style={{ fontFamily: 'Roboto-Bold' }}> Deposit </Text>
            <Text style={{ color: "gray", fontSize: 12 }}> Just Now </Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ color: "#34be82", fontFamily: 'Roboto-Bold' }}> +270</Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 5,
          alignItems: "center",
          flexDirection: "row",

          justifyContent: "space-between",
          shadowColor: "#FFFFFF", 
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
    
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={"#FF6666"}
            style={{
              backgroundColor: "#FCD2D1",
              padding: 10,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingLeft: 4 }}>
            <Text style={{ fontFamily: 'Roboto-Bold' }}> Payment</Text>
            <Text style={{ color: "gray", fontSize: 12 }}> Just Now </Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ color: "#FF6666", fontFamily: 'Roboto-Bold' }}> -260</Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 5,
          alignItems: "center",
          flexDirection: "row",

          borderRadius: 10,

          justifyContent: "space-between",
          shadowColor: "#FFFFFF",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={"#34be82"}
            style={{
              backgroundColor: "#C1F2B0",
              padding: 10,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingLeft: 4 }}>
            <Text style={{ fontFamily: 'Roboto-Bold' }}> Deposit </Text>
            <Text style={{ color: "gray", fontSize: 12 }}> Just Now </Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ color: "#34be82", fontFamily: 'Roboto-Bold' }}> +300</Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 5,
          alignItems: "center",
          flexDirection: "row",

          borderRadius: 10,

          justifyContent: "space-between",
          shadowColor: "#FFFFFF", 
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={"#34be82"}
            style={{
              backgroundColor: "#C1F2B0",
              padding: 10,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingLeft: 4 }}>
            <Text style={{fontFamily: 'Roboto-Bold'}}> Deposit </Text>
            <Text style={{ color: "gray", fontSize: 12 }}> Just Now </Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ color: "#34be82",fontFamily: 'Roboto-Bold' }}> +140</Text>
        </View>
      </View>
      <View
        style={{
          marginVertical: 5,
          alignItems: "center",
          flexDirection: "row",

          justifyContent: "space-between",
          shadowColor: "#FFFFFF", 
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 4,
    
          elevation: 5,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="rupee-sign"
            size={18}
            color={"#FF6666"}
            style={{
              backgroundColor: "#FCD2D1",
              padding: 10,
              borderRadius: 10,
            }}
          />
          <View style={{ paddingLeft: 4 }}>
            <Text style={{ fontFamily: 'Roboto-Bold' }}> Payment</Text>
            <Text style={{ color: "gray", fontSize: 12 }}> Just Now </Text>
          </View>
        </View>
        <View style={{}}>
          <Text style={{ color: "#FF6666",fontFamily: 'Roboto-Bold'}}> -260</Text>
        </View>
      </View>
    </View>
  );
};
export default TransactionCard;
