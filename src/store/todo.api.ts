import getInstance from "./axios-instance";

export class TodoApi {
  static async create(body: any) {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.post("/todos", body);
    return data;
  }

  static async fetch() {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.get("/todos");
    return data;
  }

  static async deleteById(id: string) {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.delete(`todos/${id}`);
    return data;
  }

  static async updateById(id: string, body: any) {
    const axiosInstance = getInstance();
    const { data } = await axiosInstance.put(`/todos/${id}`, body);
    return data;
  }
}