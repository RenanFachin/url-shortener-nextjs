"use client"

import { useState } from "react";
import ShortenForm from "./shorten-form";
import URLList from "./url-list";

export default function URLShortenerContainer() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1)
  }

  return (
    <div>
      <ShortenForm  handleRefresh={handleRefresh}/>
      <URLList key={refreshKey}/>
    </div>
  )
}