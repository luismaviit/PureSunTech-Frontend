async function fetchDataFromEndpoint(endpointUrl: string) {
    try {
      const response = await fetch(endpointUrl);
  
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
  
      const data = await response.json();
      // Aquí puedes hacer algo con los datos, por ejemplo:
      console.log('Datos recibidos:', data);
      
      return data; // Opcional: puedes devolver los datos obtenidos
    } catch (error:any) {
      console.error('Hubo un problema con la solicitud:', error.message);
      throw error;
    }
  }
  