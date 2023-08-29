import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { IFormData, ISignInData, defaultFormValue } from './App.interface'
import OTPInput from './OTP'
import SignIn from './SignIn'

const ParentComponent: React.FC = () => {
  const [formValues, setFormValues] = useState<IFormData>(defaultFormValue)
  const [showInitialView, setShowInitialView] = useState(true)

  return (
    <div className="w-full h-full">
      <div className="w-full xs:w-2/3 sm:w-1/2 lg:w-1/3 xl:w-1/4 h-full mx-auto flex items-center overflow-hidden relative">
        <div className="w-full shadow-lg bg-white shadow-outline whitespace-nowrap">
          <motion.div
            className="inline-block w-full"
            initial={{ x: '-100%', y: 0 }}
            animate={{ x: showInitialView ? '0%' : '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <SignIn
              initialValues={formValues.signIn}
              move={(signIn: ISignInData) => {
                setFormValues((prev) => ({ ...prev, signIn }))
                setShowInitialView(false)
              }}
            />
          </motion.div>
          <motion.div
            className="inline-block w-full"
            initial={{ x: '100%', y: 0 }}
            animate={{ x: showInitialView ? '0%' : '-100%' }}
            transition={{ duration: 0.5 }}
          >
            <OTPInput
              data={formValues.signIn}
              move={() => setShowInitialView(true)}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ParentComponent
