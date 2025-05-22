import { Button } from "./components/ui/button";
import { useNavigate } from "@tanstack/react-router";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <h1 className="text-center text-5xl font-bold my-5 ">
          Welcome to Tanstack Lesson 👋
        </h1>
        <Button onClick={() => navigate({ to: "/about" })}>Let's Do it</Button>
      </div>
    </>
  );
}

export default App;
