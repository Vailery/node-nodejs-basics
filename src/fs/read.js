import { join } from "path";
import { readFile } from "fs/promises";

const read = async () => {
  // Write your code here
  const filePath = join(import.meta.dirname, "files", "fileToRead.txt");

  try {
    const content = await readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    throw new Error("FS operation failed");
  }
};

await read();
