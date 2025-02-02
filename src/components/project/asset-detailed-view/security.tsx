import { ChevronDown } from "lucide-react";

export default function Security() {
  return (
    <div>
      <div className="text-2xl font-bold">Security</div>
      <div className="text-sm text-gray-500">
        <div className="flex flex-row items-center gap-2"><ChevronDown className="w-4 h-4"/>Show details</div>

      </div>
    </div>
  )
}