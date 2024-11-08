export const getMyServices = async (email) => {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services?_email=${email}`,
      {
        cache: "no-store",
      }
    );
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};
