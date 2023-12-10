type ButtonProps = {
  children: React.ReactNode
  onclick?: () => void
  disable?: boolean
}

const Button = ({ children, onclick, disable }: ButtonProps) => {
  return (
    <button
      className={`p-2 text-white ${disable ? 'bg-red-500' : 'bg-green-500'}`}
      onClick={onclick}
      disabled={disable}
    >
      {children}
    </button>
  )
}

export default Button
