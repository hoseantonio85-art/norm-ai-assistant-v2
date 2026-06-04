import { createFileRoute } from "@tanstack/react-router";
import NormPrototype from "@/components/NormPrototype";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Норм — AI-помощник" },
      { name: "description", content: "Интерактивный прототип AI-ассистента Норм." },
      { property: "og:title", content: "Норм — AI-помощник" },
      { property: "og:description", content: "Интерактивный прототип AI-ассистента Норм." },
    ],
  }),
  component: Index,
});

function Index() {
  return <NormPrototype />;
}
