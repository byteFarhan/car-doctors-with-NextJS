async function getTopServices() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/top-services`
  );
  return await resp.json();
}

export default getTopServices;
