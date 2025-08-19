"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import UrlListItem from "./url-list-item";

export interface URLResponse {
  id: string
  originalUrl: string
  shorCode: string
  createAt: Date
  visits: number
}

export default function URLList() {
  const [urls, setUrls] = useState<URLResponse[]>([])

  const fetchAllUrls = async () => {
    try {
      const {data} = await axios.get("/api/urls")

      setUrls(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchAllUrls()
  }, [])

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Recent URLs</h2>

      <ul className="space-y-2">
        {urls.map((url) => (
          <UrlListItem key={url.id} url={url}/>
        ))}
        
      </ul>
    </div>
  )
}