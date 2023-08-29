export const BackButton = ({
  onClickCallback,
}: {
  onClickCallback: () => void
}) => (
  <button
    onClick={onClickCallback}
    className="font-bold p-4 pl-0 absolute rounded inline-flex items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 mr-2 transform scale-x-[-1]"
      viewBox="0 0 10 16"
    >
      <path fill="#000" d="M10 8l-8 8-1.5-1.5L7 8 .5 1.5 2 0z" />
    </svg>
    <span className="text-gray-500 font-normal">Back</span>
  </button>
)
