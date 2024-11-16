export async function postSelected(selected: string[] | null) {
  if (selected == null) return null;
  const response = await fetch(
    "http://localhost:8080/api/v1/recommendations/select",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ keywords: selected }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular item");
  }
  const data = await response.json();

  return data;
}
export async function getTaskStatus(taskId: string) {
  if (taskId == "") return null;
  console.log(taskId);
  const response = await fetch(
    `http://localhost:8080/api/v1/recommendations/${taskId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular item");
  }
  const data = await response.json();

  return data;
}

export async function getSelectedResult(taskId: string) {
  const response = await fetch(
    `http://localhost:8080/api/v1/recommendations/result/${taskId}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch popular item");
  }
  const data = await response.json();

  return data;
}
