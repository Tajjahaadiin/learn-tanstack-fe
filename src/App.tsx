import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FileQuestion } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./components/ui/form";
import { Label } from "./components/ui/label";
import { Skeleton } from "./components/ui/skeleton";
import { useEditBooks } from "./feature/books/hooks/useEditBook";
import useGetBooksDatas from "./feature/books/hooks/useGetBooksDatas";
import type { BookDTO } from "./feature/books/type/book.type";
// import useBooksDatas from "./feature/books/hooks/useBooksDatas";
function App() {
  const { books, isLoading } = useGetBooksDatas();
  // const { books, isLoading } = useBooksDatas();

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1 className="text-center text-5xl font-bold my-5 ">
          Welcome to Tanstack Lesson 👋
        </h1>

        <div className="flex gap-3">
          <AddBookForm />
        </div>
        {isLoading ? (
          <>
            <div className="grid grid-cols-3 gap-10 mt-5">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-3 mt-20 gap-5 rounded-md justify-center items-center ">
              {books?.map((book) => (
                <div
                  key={book.id}
                  className="flex flex-col shadow-lg/40 bg-gray-50 shadow-gray-800 aspect-square min-h-75 "
                >
                  <>
                    <div className=" min-h-30 border bg-gray-200 "></div>
                    <p className="text-2xl font-bold text-center mt-2">
                      {book.title}
                    </p>
                    <p className="text-md text-center ">{book.author}</p>

                    <div className="flex h-full p-5 justify-center items-end gap-10  ">
                      <EditBookForm {...book} />
                      <DeleteBookForm />
                    </div>
                  </>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export const EditBookForm = (defaultValue: BookDTO) => {
  const { form, isPending, onSubmit, isOpen, setIsopen } =
    useEditBooks(defaultValue);

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsopen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Books</DialogTitle>
            <DialogDescription>
              Make changes to your Books here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit, (errors) => {
                console.error("form validation errors:", errors);
              })}
            >
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <FormField
                    name="title"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>title</FormLabel>
                        <Input {...field} className="col-span-3" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <FormField
                    name="author"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author</FormLabel>
                        <Input {...field} className="col-span-3" />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <DialogFooter>
                <Button disabled={isPending} type="submit">
                  Save changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export const DeleteBookForm = () => {
  return (
    <>
      <form>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="destructive">delete</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Delete Books</DialogTitle>
              <DialogDescription>
                Make changes to your Books here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="">
              <FileQuestion className="size-20 text-center m-auto" />
            </div>
            <DialogFooter>
              <Button variant={"destructive"} type="submit">
                delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </form>
    </>
  );
};

export const AddBookForm = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">add</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Books</DialogTitle>
            <DialogDescription>
              Make changes to your Books here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <form>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  title
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  author
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
          </form>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
export default App;
