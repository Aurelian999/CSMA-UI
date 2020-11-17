import { AxiosResponse } from 'axios';
import { SERVICES_API_PATH } from '../../constants';
import { axiosInstance } from '../../helpers/axiosInstance';
import { Service } from '../../interfaces/SalonService';

function getAll(): Promise<AxiosResponse<Service[]>> {
  return axiosInstance.get(SERVICES_API_PATH);
}

function getById(id: number): Promise<AxiosResponse<Service>> {
  return axiosInstance.get(`${SERVICES_API_PATH}${id}`);
}

export const salonService = {
  getAll,
  getById,
};
