export async function getTeamData() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/team`);
  return await resp.json();
}
