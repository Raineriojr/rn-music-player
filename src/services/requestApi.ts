import { api } from "./api";

export async function getAlbum (albumId: number): Promise<Object> {
  try {
    const response = await api.get(`/album/${albumId}`);

    return {
      data: response.data
    }
  } catch (error) {
    return {
      error
    }
  }
}