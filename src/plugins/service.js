import { baseApi } from './axios'

// 获取海岛列表
export const getIslandList = () => baseApi.get('island')