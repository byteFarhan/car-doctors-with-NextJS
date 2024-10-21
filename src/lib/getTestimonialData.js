export async function getTestimonialData() {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial-data`
  );
  return await resp.json();
}
