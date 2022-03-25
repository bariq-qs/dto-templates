/* eslint-disable class-methods-use-this */
import { Response } from '@/utils/domain/entities'
import Repository from '@/utils/data/repository'
import ICrud from '@/utils/domain/usecase/iCrud'
import {
  fetchAllCost
} from '@/utils/data/source/remote/api'

class CostUseCase implements ICrud {
  getDataForm(id: any): Promise<any> {
    throw new Error('Method not implemented.')
  }

  changeIsActive(data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

  getAll(filter: any = null): Promise<Response> {
    // console.log('ini filter', filter)
    return new Repository(fetchAllCost(), null).getResult(false)
  }

  submitData(id: any, data: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }

  deleteData(id: any): Promise<Response> {
    throw new Error('Method not implemented.')
  }
}

const costUseCase = new CostUseCase()

export {
  costUseCase
}
