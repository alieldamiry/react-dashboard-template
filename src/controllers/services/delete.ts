import api from "../api";

export default async function deleteRequest(
  entity: string,
  id: number | string
) {
  const response = api.delete(`/${entity}/${id}`);
  return response;
}
