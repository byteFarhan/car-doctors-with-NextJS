export const getAllServices = async () => {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services`,
      {
        cache: "no-store",
      }
    );
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};
