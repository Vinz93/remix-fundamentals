import { Outlet } from "@remix-run/react";
import { ErrorFallback } from "~/components";

export default function HiddenParentRoute() {
  return <Outlet />;
}

export function CatchBoundary() {
  return <ErrorFallback />;
}
