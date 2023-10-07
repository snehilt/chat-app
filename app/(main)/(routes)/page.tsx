import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-full flex-col gap-4">
      <p className="text-5xl font-bold text-indigo-500">Discord</p>
      <UserButton afterSignOutUrl="/" />
      <Button>Lets goo</Button>
      <ModeToggle />
    </div>
  );
}
