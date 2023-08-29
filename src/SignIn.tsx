import { useState } from 'react'
import { Assistance } from './components/Assistance'
import { Heading } from './components/Heading'
import { ISignInData } from './App.interface'

interface IProps {
  initialValues: ISignInData
  move: (values: ISignInData) => void
}
const SignIn = ({ move, initialValues }: IProps) => {
  const [loading, setLoading] = useState(false)
  const [values, setValues] = useState(initialValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    const formData = new FormData(e.target as HTMLFormElement)
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    move({ email, password })
    setLoading(false)
  }

  return (
    <div className="flex flex-col px-6 py-12 lg:px-8">
      <Heading />
      <div className="mt-10 mb-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
                autoComplete="email"
                required
                className="block h-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="current-password"
                required
                className="block h-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white uppercase shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? 'Loading' : 'Send code'}
            </button>
          </div>
        </form>

        <Assistance />
      </div>
      <hr />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h5 className="my-5 text-center text-xs font-bold tracking-tight text-gray-500 uppercase">
          Follow us on social media
        </h5>
        <div className="flex justify-center items-center space-x-4">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default SignIn
