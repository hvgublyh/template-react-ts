import { useSelector } from 'react-redux'


function Header() {
  const UserState = useSelector((state: any) => state.userState)
  return (
    <div className="header">
      <div className="text-center">
        {UserState.header.name}
      </div>
    </div>
  );
}

export default Header;