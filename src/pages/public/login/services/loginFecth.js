export const fetchBoletinData = async (data) => {
  const endpoint = "https://puresuntech.onrender.com/user/login";
  fetch("https://puresuntech.onrender.com/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.ok) {
        // Petición exitosa
        return response.json();
      } else {
        throw new Error("Error en la petición");
      }
    })
    .then((data) => {
      console.log("Respuesta del servidor:", data);

      if (data.token) {
        localStorage.setItem("token", data.token);
        console.log(
          "Token almacenado en localStorage:",
          localStorage.getItem("token")
        );
      }
    })
    .catch((error) => {
      // Capturar errores
      console.error("Error:", error);
    });

  
};