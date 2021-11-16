import api from "../api";

export async function createCompany(data: any) {
  console.log(data);

  const response = await api.post(`/companies`, data);
  return response;
}
export async function updateCompany(data: any, companyId: string | number) {
  console.log(data);

  const response = await api.put(`/companies/${companyId}`, data);
  return response;
}

export async function fetchcCompanies(page: number) {
  const response = await api.get(`/companies?page=${page}`);
  return response.data.data;
}

export async function fetchParentCompanies() {
  const response = await api.get(`/parent-companies`);
  const modifedResponse = response.data.data.map((company: any) => ({
    label: company.name,
    value: company.id,
  }));
  return modifedResponse;
}
