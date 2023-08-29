import Logo from './../assets/simply-fixable.png'

export const Heading = () => (
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-14 w-auto" src={Logo} alt="Your Company" />
    <h2 className="mt-10 text-center text-2xl font-light leading-9 tracking-tight text-green-500 uppercase">
      Welcome
    </h2>
  </div>
)
