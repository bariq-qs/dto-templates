import { Remote, remoteEnum } from '@/utils/data/source/remote/remote'

const baseUrl = 'users'

const fetchAllProvince = () => new Remote(remoteEnum.get, `${baseUrl}`)

export {
  fetchAllProvince
}
