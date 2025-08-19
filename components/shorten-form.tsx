'use client'

import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(url)

    try {
      const response = await axios.post("/api/shorten", {url})
      console.log(response.data)

      setUrl("")

    } catch (error) {
      console.error(error)
    } finally {
      setUrl("")
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

        <Button type="submit" className="w-full p-2">Shorten</Button>  
      </div>
    </form>
  )
}