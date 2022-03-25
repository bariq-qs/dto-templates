import { Remote, remoteEnum } from '@/utils/data/source/remote/remote'

const baseUrl = 'cost'

const fetchAllCost = () => new Remote(remoteEnum.get, `${baseUrl}`)

export {
  fetchAllCost
}
