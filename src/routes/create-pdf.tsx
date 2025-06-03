import CreatePdf from "@/feature/create-pdf/create-pdf";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create-pdf")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className=" h-full min-h-screen">
      <CreatePdf />
    </div>
  );
}
