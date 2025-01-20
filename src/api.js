const API_BASE_URL = "http://localhost:5000/api";

// Algemene functie voor API-requests
const apiCall = async (endpoint, method = "GET", body = null) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body) options.body = JSON.stringify(body);

  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);

    // Controleer of de response status ok is
    if (!response.ok) {
      throw new Error(
        `API call failed: ${response.status} ${response.statusText}`
      );
    }

    // Parse de JSON-respons
    const data = await response.json();

    // Debugging log
    console.log("API Response:", data);

    // Zorg ervoor dat we altijd een `data` veld teruggeven
    if (!data) {
      throw new Error("Ongeldige API-response ontvangen.");
    }

    return data; // Return de geparste data
  } catch (error) {
    console.error("API Error:", error);
    throw error; // Gooit de fout opnieuw om de frontend te laten reageren
  }
};

// Project API-calls
export const fetchProjects = () => apiCall("projects");
export const createProject = (project) => apiCall("projects", "POST", project);
export const updateProject = (id, project) =>
  apiCall(`projects/${id}`, "PUT", project);
export const deleteProject = (id) => apiCall(`projects/${id}`, "DELETE");

// Service API-calls
export const fetchServices = () => apiCall("services-admin");
export const createService = (service) =>
  apiCall("services-admin", "POST", service);
export const updateService = (id, service) =>
  apiCall(`services-admin/${id}`, "PUT", service);
export const deleteService = (id) =>
  apiCall(`services-admin/${id}`, "DELETE");
