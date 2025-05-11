"use client"

import type React from "react"

import { useState, useRef } from "react"
import { CloudUpload, Upload } from "lucide-react"

export function FileUploadArea() {
  const [files, setFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...newFiles].slice(0, 25))
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles((prev) => [...prev, ...newFiles].slice(0, 25))
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div
      className="border border-dashed border-gray-300 rounded-md p-6 cursor-pointer"
      onClick={triggerFileInput}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className="flex  items-center gap-6 text-center">
  
        <CloudUpload className="h-9 w-9 text-black mb-2" />
        <p className="text-sm text-gray-600">Select your files, drag and drop them, or take a photo.</p>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          multiple
          onChange={handleFileChange}
          accept="image/*"
        />
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-700">{files.length} file(s) selected</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {files.map((file, index) => (
              <div key={index} className="text-xs bg-gray-100 rounded px-2 py-1">
                {file.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
