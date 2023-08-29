export const Assistance = () => (
  <p className="mt-10 text-center text-sm text-gray-500">
    Need assistance?{' '}
    <a
      onClick={() => {
        alert("You clicked 'Call us' button")
      }}
      className="font-500 cursor-pointer underline leading-6 text-indigo-600 hover:text-indigo-500"
    >
      Call us
    </a>
  </p>
)
