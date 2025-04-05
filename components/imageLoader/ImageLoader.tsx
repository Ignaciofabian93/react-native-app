import useDimensions from "@/hooks/useDimensions";
import { Image, StyleSheet, View } from "react-native";
import IconButton from "../buttons/IconButton";

type ImageLoader = {
  showPhoto: boolean;
  photo: string;
  handleImage: (fn: "pick" | "take") => void;
};

export default function ImageLoader({ showPhoto, photo, handleImage }: ImageLoader) {
  const { width } = useDimensions({ scope: "window" });
  return (
    <View style={[styles.photo]}>
      {showPhoto ? (
        <Image source={{ uri: `data:image/jpeg;base64,${photo}` }} style={{ width: width * 0.9, height: 200 }} />
      ) : (
        <View
          style={[
            {
              width: width * 0.9,
              height: 300,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            },
          ]}
        >
          <IconButton icon="image" showText text="Upload image" onPress={() => handleImage("pick")} />
          <IconButton icon="camera-alt" showText text="Take photo" onPress={() => handleImage("take")} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  photo: {
    width: "90%",
    height: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    alignSelf: "center",
    marginVertical: 30,
    overflow: "hidden",
  },
});
