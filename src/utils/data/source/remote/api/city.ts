import { Remote, remoteEnum } from '@/utils/data/source/remote/remote'

const baseUrl = 'city'

const fetchAllCity = () => new Remote(remoteEnum.get, `${baseUrl}`)

export {
  fetchAllCity
}
