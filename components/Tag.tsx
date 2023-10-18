const Tag = ({icon, name}: any) => {
  return (
    <div className="flex items-center">
        <img src={icon} alt="" height={33} width={33}/>
        <p className="text-[1.6rem] pl-3">{name}</p>
    </div>
  )
}

export default Tag