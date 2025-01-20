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

  const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }
  return await response.json();
};

// Project API-calls
export const fetchProjects = () => apiCall("projects");
export const createProject = (project) => apiCall("projects", "POST", project);
export const updateProject = (id, project) =>
  apiCall(`projects/${id}`, "PUT", project);
export const deleteProject = (id) => apiCall(`projects/${id}`, "DELETE");

// Service API-calls
export const fetchServices = () => apiCall("services");
export const createService = (service) => apiCall("services", "POST", service);
export const updateService = (id, service) =>
  apiCall(`services/${id}`, "PUT", service);
export const deleteService = (id) => apiCall(`services/${id}`, "DELETE");
