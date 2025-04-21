import ProfilePage from '@/components/profilePage/page'
import { NextPage } from 'next'

interface Props {}

const UserProfile: NextPage<Props> = ({}) => {
  return <div className='container mx-auto min-h-screen mt-10'>
    <div className='flex justify-center'>
    <ProfilePage />
    </div>
  </div>
}

export default UserProfile