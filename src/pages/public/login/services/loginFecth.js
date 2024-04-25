export const fetchBoletinData = async (data) => {
  const endpoint = "https://scrap-project.onrender.com/scrap";
  const dataToSend = { keyword: `${data}` };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Incluye aquí cualquier otro encabezado que tu endpoint requiera
      },
      body: JSON.stringify(dataToSend),
    });

    if (!response.ok) {
      throw new Error(`Error en la red: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la petición:", error);
    return null;
  }
};