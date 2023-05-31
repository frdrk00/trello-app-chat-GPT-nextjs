import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64726a5de6e926a8a249",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
