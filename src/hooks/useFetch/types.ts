import { ICar, ICategory } from 'store/car/types'
import { IPoint } from 'store/location/types'
import { IOrdered, IOrderStatuses } from 'store/order/types'
import { IRate } from 'store/rate/types'

export interface IFetchOptions {
  method: FetchMethod
  headers?: { [index: string]: string }
  body?: BodyInit
}

export interface IFetchData {
  data: ICar[] | ICategory[] | IPoint[] | IRate[] | IOrderStatuses[] | IOrdered
}

export interface IFetchState {
  data: Nullable<IFetchData>
  error: Nullable<Error>
  status500: boolean
}

export type UseFetchType = (
  url: string,
  option: IFetchOptions,
) => Promise<IFetchState>

export enum URLS {
  POINT_URL = 'https:///api-factory.simbirsoft1.com/api/db/point/',
  CAR_URL = 'https:///api-factory.simbirsoft1.com/api/db/car/',
  CATEGORY_URL = 'https:///api-factory.simbirsoft1.com/api/db/category/',
  RATE_URL = 'https:///api-factory.simbirsoft1.com/api/db/rate/',
  ORDER_URL = 'https:///api-factory.simbirsoft1.com/api/db/order/',
  ORDER_STATUS_URL = 'https:///api-factory.simbirsoft1.com/api/db/orderStatus/',
}

export enum FetchMethod {
  GET = 'GET',
  POST = 'POST',
}
