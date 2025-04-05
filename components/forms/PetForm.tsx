import { View, StyleSheet, Image } from "react-native";
import Input from "../inputs/Input";
import Calendar from "../inputs/Calendar";
import VerticalScroller from "../layouts/VerticalScroller";
import Button from "../buttons/Button";
import Screen from "../layouts/Screen";
import usePetStore from "@/store/PetStore";
import useDimensions from "@/hooks/useDimensions";
import IconButton from "../buttons/IconButton";
import useImagePicker from "@/hooks/useImagePicker";
import { useEffect, useState } from "react";

export default function PetForm() {
  const { width } = useDimensions({ scope: "window" });
  const { pet, handlePet } = usePetStore();
  const { pickImage, takePhoto } = useImagePicker();
  const [showPhoto, setShowPhoto] = useState<boolean>(false);

  const handleImage = async (fn: "pick" | "take") => {
    if (fn === "pick") {
      const image = await pickImage();
      if (image) {
        handlePet({ key: "photo", value: image });
      }
    } else {
      const image = await takePhoto();
      if (image) {
        handlePet({ key: "photo", value: image });
      }
    }
  };

  useEffect(() => {
    if (!pet.photo) setShowPhoto(false);
    else setShowPhoto(true);
  }, [pet.photo]);

  return (
    <Screen>
      <VerticalScroller contentContainerStyle={[{ paddingBottom: 100 }]}>
        <Input
          placeholder="Name"
          label="Name"
          value={pet.name}
          onChangeText={(e) => handlePet({ key: "name", value: e })}
        />
        <Input
          placeholder="Breed"
          label="Breed"
          value={pet.breed}
          onChangeText={(e) => handlePet({ key: "breed", value: e })}
        />
        <Calendar value={pet.birthday} onChange={handlePet} />
        <Input
          placeholder="Weight"
          label="Weight"
          keyboardType="decimal-pad"
          value={pet.weight.toString()}
          onChangeText={(e) => handlePet({ key: "weight", value: e })}
        />
        <View style={[styles.photo]}>
          {showPhoto ? (
            <Image
              source={{ uri: `data:image/jpeg;base64,${pet.photo}` }}
              style={{ width: width * 0.9, height: 200 }}
            />
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
        <View style={[styles.bottomSection]}>
          <Button key={"save"} text="Save" type="primary" size="full" />
          <Button key={"medical records"} text="Add Medical records" type="primary" size="full" disabled />
        </View>
      </VerticalScroller>
    </Screen>
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
  bottomSection: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
