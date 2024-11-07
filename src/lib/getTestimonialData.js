export async function getTestimonialData() {
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/testimonial-data`
    );
    return await resp.json();
  } catch (error) {
    console.log(error);
  }
}
