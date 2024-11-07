export async function getTeamData() {
  try {
    const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`);
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
}
