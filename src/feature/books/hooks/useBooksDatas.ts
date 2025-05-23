import api from "@/service/api";
import type { BookDTO } from "../type/book.type";
import { useQuery } from "@tanstack/react-query";

const useBooksDatas = () => {
  const {
    data: books,
    isLoading,
    error,
  } = useQuery<BookDTO[]>({
    queryKey: ["books"],
    queryFn: async () => {
      const response = await api.get<BookDTO[]>(`/books`);
      return response.data;
    },
  });

  const toReturn = {
    books,
    isLoading,
    error,
  };
  return toReturn;
};

export default useBooksDatas;
