const Tag = ({icon, name}: any) => {
  return (
    <div className="flex items-center">
        <img src={icon} alt="" height={26} width={26}/>
        <p className="text-[24px] pl-3">{name}</p>
    </div>
  )
}

export default Tag