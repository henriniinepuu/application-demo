import Attachments from "./attachments";
import Relations from "./relations";
import Security from "./security";
import Linked from "./linked";
import { Separator } from "@/components/ui/separator";

export default function AssetDetailedView() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col  pt-5 w-full">
        <div className="text-2xl font-bold">Asset Details</div>
        <div>Example data 1</div>
        <div>Example data 2</div>
        <div>Example data 3</div>
        <div>Example data 4</div>
        <div>Example data 5</div>
        <div>Example data 6</div>
        <div>Example data 7</div>
        <div>Example data 8</div>
        <div>Example data 9</div>
        <div>Example data 10</div>
      </div>
      <div className="flex flex-col gap-2 w-[400px] bg-neutral-200 rounded-md p-2">
        <Attachments />
        <Separator className="bg-neutral-400"/>
        <Linked />
        <Separator className="bg-neutral-400"/>
        <Relations />
        <Separator className="bg-neutral-400"/>
        <Security />
      </div>

    </div>
  )
}