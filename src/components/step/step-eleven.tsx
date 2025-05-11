
"use client"

import FormSection from "../ui/form-section"

interface StepElevenProps {
  formData: { name: string; email: string; acceptTerms: boolean }
  updateFormData: (data: Partial<{ name: string; email: string; acceptTerms: boolean }>) => void
}

export default function StepEleven({ formData, updateFormData }: StepElevenProps) {
  return (
     <div className="space-y-8 max-w-2xl">
          <FormSection
            title="Create an account to manage your job"
            subtitle="This information is not visible to professionals until you decide to contact them."
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Mr. X"
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  value={formData.name}
                  onChange={(e) => updateFormData({ name: e.target.value })}
                />
              </div>
    
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                 Phone number
                </label>
                <input
                  type="number"
                  placeholder="017XXXXXXXX"              
                  className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                />
              </div>
    
       
    
              <div className="flex items-start mt-6">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    checked={formData.acceptTerms}
                    onChange={(e) => updateFormData({ acceptTerms: e.target.checked })}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-[#333333]/60">
                  I would like to receive marketing information about Werkspot&apos services by email, SMS and/or telephone and understand that I can unsubscribe at any time.
                  </label>
                
                </div>
              </div>
               <p className="text-[#333333]/60 text-sm max-w-lg">
  By clicking &quot;submit&quot; you agree to Werkspot&apos;s Terms and Conditions and Privacy Policy.
</p>
            </div>
          </FormSection>
        </div>
  )
}