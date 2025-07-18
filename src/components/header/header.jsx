import profile from '../../assets/images/profile.png'
export default function Header() {

  return (
    <div className="flex justify-between items-center py-4 px-6 border-b border-gray-100 max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium text-gray-800">Knowledge Cafe</h2>
        <img src={profile} alt="Profile" className="w-10 h-10 rounded-full" />
    </div>
  )
}


