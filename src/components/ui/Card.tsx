import { CardProps } from "../../types/card"


const Card = ({children, className}:CardProps) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Card