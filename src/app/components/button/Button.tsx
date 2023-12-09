type ButtonProps = {
  children: React.ReactNode
  onclick?: () => void
}

const Button = ({ children, onclick }: ButtonProps) => {
  return <button onClick={onclick}>{children}</button>
}

export default Button
