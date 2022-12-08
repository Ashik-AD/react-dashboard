
import { XAxisProps } from 'recharts'
import { XAxis } from 'recharts'

const RechartXAxis = ({...rest}:XAxisProps) => {
  return (
    <XAxis fontSize={"0.856rem"} {...rest} />
  )
}
export default RechartXAxis