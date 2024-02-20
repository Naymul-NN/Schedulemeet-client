import axios from "axios";

const imgBBApi = "7abfd263d91cac1963daff021d358b13";

const uploadImg = async (img) => {
  try {
    const formData = new FormData();

    formData.append("image", img);

    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${imgBBApi}`,
      formData
    );

    if (res.data.success) {
      return res.data.data.display_url;
    } else {
      throw new Error(res.data.error.message);
    }
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};

export default uploadImg;
