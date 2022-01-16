
// Root URL
const API_ROOT = "http://localhost:8000/admin";

export const APIUrls = {
    createResult : () => `${API_ROOT}/create`,
    fetchResult : () => `${API_ROOT}/resultList`,
    deleteResult: (ID) => `${API_ROOT}/deleteResult/${ID}`,
    editFindResult : (ID) => `${API_ROOT}/editFindResult/${ID}`,
    editResult : () => `${API_ROOT}/editResult`
}