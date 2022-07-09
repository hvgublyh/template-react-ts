import { useSelector } from 'react-redux'
import {Message} from '../../../assert/ts/MessageType'


function Header() {
  const message: Message = useSelector((state: any) => state.userState.message)
  return (
    <div className="header">
      <div className="text-center">
        {message.header.name}
      </div>
    </div>
  );
}

export default Header;