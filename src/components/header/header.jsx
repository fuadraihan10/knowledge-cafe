import profile from '../../assets/images/profile.png'
export default function Header() {

  return (
    <div className="flex justify-between items-center p-4 mx-4 border-b-2">
        <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
        <img src={profile} alt="Profile" />
    </div>
  )
}


