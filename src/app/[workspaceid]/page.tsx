import { Button } from "@/components/ui/button";
import { Dialog, DialogContent,  DialogTrigger } from "@/components/ui/dialog";

export default function WorkspaceIDPage() {
  return (
    <div>
      <div>
        WorkspaceIDPage
      </div>
      <div>
        <Dialog>
          <DialogTrigger>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent></DialogContent>
        </Dialog>
      </div>
    </div>
  );

}
