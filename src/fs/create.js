import { writeFile, access } from "fs/promises";
import { join } from "path";
import { constants } from "fs";

const create = async () => {
  // Write your code here
  const filePath = join(import.meta.dirname, "files", "fresh.txt");
  let fileExists;

  try {
    await access(filePath, constants.F_OK);
    fileExists = true;
  } catch (error) {
    fileExists = false;
  }

  if (fileExists) throw new Error("FS operation failed");

  const content = "I am fresh and young";

  await writeFile(filePath, content);
};

await create();
