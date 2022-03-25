/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import store from '@/store'
import axios from '@/config/axios/axios'
import { IRemote } from './iRemote'

// eslint-disable-next-line no-shadow
enum remoteEnum {
  get,
  post,
  put,
  delete,
  noAction
}

class Remote implements IRemote {
  method: remoteEnum

  endPoint: string

  header: any

  data: any

  constructor(method: remoteEnum, endPoint: string, data: any = null, header = {}) {
    this.method = method
    this.endPoint = endPoint
    this.header = header
    this.data = data

    this.header.key = ''
    this.header.timeout = 5000
  }

  get() {
    const remote = (this.header) ? axios.get(this.endPoint, {
      headers: this.header
    }) : axios.get(this.endPoint)
    return remote
  }

  post() {
    const remote = axios.post(this.endPoint, this.data, {
      headers: this.header
    })
    return remote
  }

  delete() {
    const remote = axios.delete(this.endPoint, {
      headers: this.header
    })
    return remote
  }

  put() {
    const remote = axios.put(this.endPoint, this.data, {
      headers: this.header
    })
    return remote
  }

  run() {
    switch (this.method) {
      case remoteEnum.get:
        return this.get()
      case remoteEnum.post:
        return this.post()
      case remoteEnum.put:
        return this.put()
      case remoteEnum.delete:
        return this.delete()
      default:
        return []
    }
  }
}

export { Remote, remoteEnum }
