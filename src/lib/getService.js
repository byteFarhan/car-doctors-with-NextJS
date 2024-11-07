export const getService = async (id) => {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`
    );
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
};
