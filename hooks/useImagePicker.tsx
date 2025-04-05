import {
  launchCameraAsync,
  launchImageLibraryAsync,
  requestMediaLibraryPermissionsAsync,
  requestCameraPermissionsAsync,
} from "expo-image-picker";

export default function useImagePicker() {
  const takePhoto = async () => {
    const { granted } = await requestCameraPermissionsAsync();
    if (granted) {
      const result = await launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true,
      });

      if (!result.canceled && result.assets[0].base64) {
        return result.assets[0].base64;
      }
    }
  };
  const pickImage = async () => {
    const { granted } = await requestMediaLibraryPermissionsAsync();
    if (granted) {
      const result = await launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.5,
        base64: true,
      });

      if (!result.canceled && result.assets[0].base64) {
        return result.assets[0].base64;
      }
    }
  };

  return { takePhoto, pickImage };
}
