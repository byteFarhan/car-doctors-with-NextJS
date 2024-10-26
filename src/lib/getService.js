export const getService = async (id) => {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/services/${id}`
  );
  return await resp.json();
};
