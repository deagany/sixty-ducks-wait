import { Popover, Button} from 'antd'
const CurrentUser = () => {
  return (
    <>
   <Popover
    placement='bottomRight'
    trigger="click"
    overlayInnterStyle={{ padding: 0}}
    overlayStyle={{zIndex:999}}
   >
    TEST

   </Popover>
   </>
  )
}

export default CurrentUser