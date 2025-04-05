import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Input from "../inputs/Input";
import Calendar from "../inputs/Calendar";
import VerticalScroller from "../layouts/VerticalScroller";
import Button from "../buttons/Button";
import Screen from "../layouts/Screen";
import usePetStore from "@/store/PetStore";
import useImagePicker from "@/hooks/useImagePicker";
import ImageLoader from "../imageLoader/ImageLoader";

export default function PetForm() {
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
        <ImageLoader showPhoto={showPhoto} handleImage={handleImage} photo={pet.photo} />
        <View style={[styles.bottomSection]}>
          <Button key={"save"} text="Save" type="primary" size="full" />
          <Button key={"medical records"} text="Add Medical records" type="primary" size="full" disabled />
        </View>
      </VerticalScroller>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bottomSection: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
});
