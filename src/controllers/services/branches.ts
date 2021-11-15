import api from "../api";

export async function fetchAllBranches() {
  const response = await api.get(`/allBranches`);
  console.log(response.data);
  const modifedResponse = response.data.data.map((branch: any) => ({
    label: branch.name,
    value: { ...branch },
  }));
  return modifedResponse;
}
