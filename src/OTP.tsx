import { ChangeEvent, useRef } from 'react'
import { Assistance } from './components/Assistance'
import { Heading } from './components/Heading'
import { ISignInData } from './App.interface'
import { BackButton } from './components/BackButton'

interface IProps {
  data: ISignInData
  move: () => void
}
const OTPInput = ({ data, move }: IProps) => {
  const ref1 = useRef<HTMLInputElement>(null)
  const ref2 = useRef<HTMLInputElement>(null)
  const ref3 = useRef<HTMLInputElement>(null)
  const ref4 = useRef<HTMLInputElement>(null)
  const ref5 = useRef<HTMLInputElement>(null)
  const ref6 = useRef<HTMLInputElement>(null)

  const inputRefs = [ref1, ref2, ref3, ref4, ref5, ref6]

  const focusNextInput = (index: number) => {
    if (inputRefs[index + 1].current && index < 5) {
      inputRefs[index + 1].current?.focus()
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target
    if (value && !isNaN(+value) && +value >= 0 && +value <= 9) {
      focusNextInput(index)
    }
  }

  const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    console.log(formData.entries())
  }

  return (
    <div className="flex flex-col px-6 pt-12 pb-24">
      <BackButton onClickCallback={move} />
      <Heading />
      <p className="text-center text-sm mt-5 font-500 leading-6">
        Enter the one-time access code sent to the email you entered
      </p>
      <p className="text-center text-sm mt-5 text-gray-500">
        <span className="font-bold">{data.email} </span>
        <a
          onClick={() => move()}
          className="font-500 underline cursor-pointer text-indigo-600 hover:text-indigo-500"
        >
          Change
        </a>
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="mt-5 md:px-5">
          <label className="block text-sm font-medium leading-6 text-gray-900 mb-2">
            SMS Code
          </label>
          <div className="flex gap-3 justify-center">
            {inputRefs.map((ref, index) => (
              <input
                key={index}
                type="number"
                className="w-1/6 md:w-10 h-12 text-center border border-gray-300 rounded-lg no-arrows"
                maxLength={1}
                ref={ref}
                onChange={(e) => handleChange(e, index)}
              />
            ))}
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="flex mt-10 h-12 w-full items-center justify-center rounded-md bg-green-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white uppercase shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </form>
      <Assistance />
    </div>
  )
}

export default OTPInput
