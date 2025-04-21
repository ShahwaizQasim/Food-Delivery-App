import ProfilePage from '@/components/profilePage/page'
import { NextPage } from 'next'

interface Props {}

const AdminProfile: NextPage<Props> = ({}) => {
  return <div>
    <ProfilePage />
  </div>
}

export default AdminProfile