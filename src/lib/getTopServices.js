async function getTopServices() {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/top-services`
    );
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
}

export default getTopServices;
