'use client'

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(url)

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Input 
          placeholder="Enter your URL" 
          className="h-10" 
          type="url" 
          required
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button type="submit" className="w-full p-2">Shorten</Button>  
      </div>
    </form>
  )
}