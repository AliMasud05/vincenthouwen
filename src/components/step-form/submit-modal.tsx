// components/submit-modal.tsx
"use client"


import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog"

interface SubmitModalProps {
  isOpen: boolean
  onClose: () => void
  formData: Record<string, unknown>
}

export default function SubmitModal({ isOpen, onClose, formData }: SubmitModalProps) {
  console.log("Form Data:", formData);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white text-black">
        <DialogHeader>
          <DialogTitle>Form Submitted</DialogTitle>
          <DialogDescription>
            Your form has been submitted successfully!
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Here&aposs the data you submitted:
            </p>
            {/* <pre className="mt-2 rounded-md bg-slate-100 p-4 text-xs text-muted-foreground overflow-auto max-h-60">
              {JSON.stringify(formData, null, 2)}
            </pre> */}
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="button" 
            onClick={onClose}
            className="bg-orange-500 hover:bg-orange-600"
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}