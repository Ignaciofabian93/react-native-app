import { openDatabaseAsync } from "expo-sqlite";

export async function SavePet() {
  const db = await openDatabaseAsync("local.db");
  const statement = await db.prepareAsync("INSERT INTO pets (name, breed, birthday, weight) VALUES (?, ?, ?, ?)");
  try {
    await statement.executeAsync([]);
  } catch (error) {
    throw new Error(`Error while saving pet ${error}`);
  } finally {
    statement.finalizeAsync();
  }
}
