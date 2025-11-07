"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc= useTRPC();
  const invoke=useMutation(trpc.invoke.mutationOptions({
    onSuccess: ()=>{
      toast.success("Inngest Function Invoked!");
    }
  }));
 return (
  <div className="p-4 max-w-7xl mx-auto">
    <Button disabled={invoke.isPending} onClick={()=>invoke.mutate({text: "Yash"})}>
      Invoke Inngest Function
    </Button>
  </div>
  );
}

export default Page;