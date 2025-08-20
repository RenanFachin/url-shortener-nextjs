"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { Check, CopyIcon, EyeIcon } from "lucide-react";
import { URLResponse } from "./url-list";
import { useState } from "react";

export default function UrlListItem({url}: {url: URLResponse}) {
  const [copied, setCopied] = useState(false)
  const shortenUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/${url.shorCode}`

  const handleCopyURL = () => {
    const fullUrl = `${shortenUrl}`

    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    })
  }

  return (
    <li className="bg-neutral-50 p-2 rounded-md flex items-center gap-2 text-sm text-gray-500 justify-between border-neutral-300 border">
          <Link href={`/${url.shorCode}`} target="_blank" className="text-blue-600">
            {shortenUrl}
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="text-muted-foreground hover:bg-muted cursor-pointer" onClick={() => handleCopyURL()}>
              {
                copied ? (
                  <Check className="size-4"/>
                ) : (
                  <CopyIcon className="size-4"/>
                )
              }
              <span className="sr-only">Copy URL</span>
            </Button>

            <span className="flex items-center gap-1">
              <EyeIcon className="size-4"/>
              <span className="text-xs text-muted-foreground">Visits: {url.visits}</span>
            </span>
          </div>
        </li>

  )
}