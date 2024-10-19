async function getTopServices() {
  const resp = await fetch("../../public/data/top-services.json");
  return await resp.json();
}

export default getTopServices;
