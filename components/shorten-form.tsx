'use client'

import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

interface handleRefreshProps {
  handleRefresh: () => void
}

export default function ShortenForm({handleRefresh}: handleRefreshProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(url)

    try {
      setIsLoading(true)

      const response = await axios.post("/api/shorten", {url})
      console.log(response.data)

      setUrl("")

      handleRefresh()

    } catch (error) {
      console.error(error)
    } finally {
      setUrl("")
      setIsLoading(false)
    }

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

        <Button type="submit" className="w-full p-2 cursor-pointer" disabled={isLoading}>
          {isLoading ? "Shortening..." : "Shorten"}
        </Button>  
      </div>
    </form>
  )
}