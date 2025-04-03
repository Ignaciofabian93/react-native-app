import { Image, StyleSheet, TouchableOpacity, type TouchableOpacityProps, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { image1 } from "@/constants/images";

export default function Card({ children, onPress, ...rest }: { children: React.ReactNode } & TouchableOpacityProps) {
  return (
    <TouchableOpacity style={[styles.card]} onPress={onPress} {...rest} activeOpacity={0.9}>
      <ThemedView
        style={[
          {
            width: "100%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        {children}
      </ThemedView>
    </TouchableOpacity>
  );
}

Card.ContentWrapper = function CardContentWrapper({ children }: { children: React.ReactNode }) {
  return <View style={[{ width: "50%", height: "100%", padding: 10 }]}>{children}</View>;
};

Card.Header = function CardHeader() {
  return (
    <View style={[{ height: "20%" }]}>
      <ThemedText type="defaultSemiBold">Pedro</ThemedText>
    </View>
  );
};

Card.Image = function CardImage() {
  return (
    <View style={[styles.imageContainer]}>
      <Image source={image1} width={20} height={20} resizeMode="cover" style={[styles.image]} />
    </View>
  );
};

Card.Footer = function CardFooter() {
  return (
    <View>
      <ThemedText>Footer</ThemedText>
    </View>
  );
};

Card.Body = function CardBody() {
  return (
    <View>
      <ThemedText>5 years</ThemedText>
      <ThemedText>14/07/2020</ThemedText>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 180,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  imageContainer: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  header: {},
  body: {},
  footer: {},
});
