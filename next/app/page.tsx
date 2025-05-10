import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col gap-y-4">
        <Button variant={'default'} className="hover:cursor-pointer">Hello from shadcn</Button>
        <div className="mx-auto">
          <ModeToggle />
        </div>
      </div>
    </main>
  );
}
