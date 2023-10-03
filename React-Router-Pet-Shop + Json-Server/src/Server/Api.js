const URL_BASE = "http://localhost:5000";

export const get = async (url, setData) => {
	try {
		const response = await fetch(URL_BASE + url);

		if (!response.ok) {
			// Manejar errores de respuesta HTTP aquí
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		const data = await response.json();
		setData(data);
	} catch (error) {
		// Manejar errores de red, como errores de conexión o solicitud
		console.error("Error en la solicitud:", error);
		throw error; // Lanza el error para que pueda ser manejado en el catch del useEffect
	}
};
