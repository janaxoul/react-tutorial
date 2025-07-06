import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <>
    <nav className='px-10 py-4 flex gap-20 justify-center bg-zinc-100'>
      {/* Using style */}
        <NavLink style={(e)=>{
          return{
            color:e.isActive?"red":"",
            fontWeight: e.isActive?"bold":""
          }
        }} to="/">Home</NavLink>
        <NavLink to="/user">
        {(e)=>{
          return <span className={[
            e.isActive? "text-red-600": "",
            e.isActive? "font-bold": ""
          ].join(" ")}>User</span>
        }}
        </NavLink>
        {/* Using class name */}
        <NavLink className={(e)=>{
          return[
            e.isActive? "text-red-600": "",
            e.isActive? "font-bold": ""
          ].join(" ")
        }} to="/about">About</NavLink>
    </nav>
    </>
  )
}

export default Nav