"use server";

const ImageKit = require("imagekit");

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const Authenticator = async () => {
  try {
    const response = imagekit.getAuthenticationParameters();
    // console.log(response);

    // await fetch("https://odinbookapi-production.up.railway.app/imagekit_auth");
    // const response = await fetch("http://localhost:3000/imagekit_auth");

    if (!response) {
      // const errorText = await response.text();
      throw new Error(`Image upload failed`);
    }

    // const data = await response.json();
    const { signature, expire, token } = response;
    return { signature, expire, token };
  } catch (error) {
    throw new Error(`Image upload failed`);
  }
};

export default Authenticator;
