import { join } from "path";
import { access } from "fs/promises";
import { constants } from "fs";
import { rename as renameFile } from "fs/promises";

const rename = async () => {
  // Write your code here
  const oldFilePath = join(import.meta.dirname, "files", "wrongFilename.txt");
  const newFilePath = join(import.meta.dirname, "files", "properFilename.md");
  let newFileExists;

  try {
    await access(oldFilePath, constants.F_OK);
  } catch (error) {
    throw new Error("FS operation failed");
  }

  try {
    await access(newFilePath, constants.F_OK);
    newFileExists = true;
  } catch (error) {
    newFileExists = false;
  }

  if (newFileExists) throw new Error("FS operation failed");

  await renameFile(oldFilePath, newFilePath);
};

await rename();
