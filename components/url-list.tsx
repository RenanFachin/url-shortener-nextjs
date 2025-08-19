import Link from "next/link";
import { Button } from "./ui/button";
import { CopyIcon, EyeIcon } from "lucide-react";

export default function URLList() {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Recent URLs</h2>

      <ul className="space-y-2">
        <li className="bg-neutral-50 p-2 rounded-md flex items-center gap-2 text-sm text-gray-500 justify-between border-neutral-300 border">
          <Link href="https://ui.shadcn.com/docs/installation/next" target="_blank" className="text-blue-600">
            https://ui.shadcn.com/docs/installation/next
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="text-muted-foreground hover:bg-muted cursor-pointer">
              <CopyIcon className="size-4"/>
              <span className="sr-only">Copy URL</span>
            </Button>

            <span className="flex items-center gap-1">
              <EyeIcon className="size-4"/>
              <span className="text-xs text-muted-foreground">Visits: 0</span>
            </span>
          </div>
        </li>

        <li className="bg-neutral-50 p-2 rounded-md flex items-center gap-2 text-sm text-gray-500 justify-between border-neutral-300 border">
          <Link href="https://ui.shadcn.com/docs/installation/next" target="_blank" className="text-blue-600">
            https://ui.shadcn.com/docs/installation/next
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="text-muted-foreground hover:bg-muted cursor-pointer">
              <CopyIcon className="size-4"/>
              <span className="sr-only">Copy URL</span>
            </Button>

            <span className="flex items-center gap-1">
              <EyeIcon className="size-4"/>
              <span className="text-xs text-muted-foreground">Visits: 0</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  )
}