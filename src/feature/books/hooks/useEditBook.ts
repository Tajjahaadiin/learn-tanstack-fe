import { useForm } from "react-hook-form";
import { bookSchema, type BookDTO } from "../type/book.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import api from "@/service/api";
import { toast } from "sonner";
import { useState } from "react";
import { isAxiosError } from "axios";

export function useEditBooks(defaultValues: BookDTO) {
  const [isOpen, setIsopen] = useState<boolean>(false);
  function handleDialog() {
    setIsopen(false);
  }
  const queryclient = useQueryClient();
  const form = useForm<BookDTO>({
    mode: "onChange",
    resolver: zodResolver(bookSchema),
    defaultValues,
  });

  const { isPending, mutateAsync } = useMutation<BookDTO, Error, BookDTO>({
    mutationKey: ["EditBook"],
    mutationFn: async ({ id, author, title }: BookDTO) => {
      const response = await api.put<BookDTO>(`/books/${id}`, {
        author,
        title,
      });
      console.log(response);
      return response.data;
    },
    onError: (error) => {
      console.log(error);
      if (isAxiosError(error)) {
        return toast.error(error.message || "something went wrong", {});
      }

      toast.error("Something went wrong!");
    },
    onSuccess: async (data) => {
      toast.success(`edit  ${data.title} data success,`);
      queryclient.invalidateQueries({ queryKey: ["books"] });
      handleDialog();
    },
  });

  async function onSubmit(data: BookDTO) {
    console.log("testaja");
    await mutateAsync(data);
    form.reset();
  }

  return {
    form,
    onSubmit,
    isPending,
    isOpen,
    setIsopen,
    handleDialog,
  };
}
