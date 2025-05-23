import api from "@/service/api";
import { useEffect, useState } from "react";
import type { BookDTO } from "../type/book.type";

const useGetBooksDatas = () => {
  const [books, setBooks] = useState<BookDTO[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await api.get<BookDTO[]>("/books");
        setBooks(response);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchData();
  }, []);

  const toReturn = {
    books,
    isLoading,
  };
  return toReturn;
};

export default useGetBooksDatas;
