
// utils/sendResponse.ts

import { Response } from "express";

interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
}

const sendResponse = <T>(res: Response, payload: IApiResponse<T>): void => {
  const { statusCode, success, message, data } = payload;

  res.status(statusCode).json({
    success,
    message,
    data: data || null,
  });
};

export default sendResponse;