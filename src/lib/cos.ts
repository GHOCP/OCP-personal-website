export async function getCosImageUrl(key: string): Promise<string | null> {
  try {
    const response = await fetch(
      `/api/cos-url?key=${encodeURIComponent(key)}`
    );

    if (!response.ok) {
      console.error("Failed to get COS URL");
      return null;
    }

    const data = await response.json();

    return data.url ?? null;
  } catch (error) {
    console.error("Failed to get COS URL:", error);
    return null;
  }
}

