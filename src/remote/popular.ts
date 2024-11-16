export async function getPopularItemImages() {
  const response = await fetch("http://localhost:8888/images");

  if (!response.ok) {
    throw new Error("Failed to fetch popular item");
  }

  const data = await response.json();

  return data;
}
