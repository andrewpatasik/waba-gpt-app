import axios, { AxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const checkEnvVariables = () => {
  if (!process.env.NEXT_PUBLIC_BASE_URL || !process.env.NEXT_PUBLIC_WABA_ID)
    throw new Error("Missing environment variables of BASE_URL and WABA_ID");
};

export const postData = async (pathname = "", data: any) => {
  try {
    checkEnvVariables();

    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_WABA_SYSTEM_TOKEN}`,
      "Content-Type": 'application/json',
    };
    const method = "post";

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_WABA_ID}/${pathname}`;

    const response = await axios(url, {
      method,
      headers,
      data,
    });

    if (response.status !== 200)
      throw new Error(
        `POST request failed with status [${response.status}] : ${response.statusText}`
      );

    return {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
  } catch (error) {
    console.error('failed to postData');
    if (error instanceof AxiosError || error instanceof Error)
      return { error: error.message };

    return { error } as any;
  }
};

export const fetchData = async (
  accountId = process.env.NEXT_PUBLIC_WABA_ID,
  pathname = ""
) => {
  try {
    checkEnvVariables();

    const headers = {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_WABA_SYSTEM_TOKEN}`,
    };

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${accountId}/${pathname}`;

    const response = await axios(url, {
      headers,
    });

    if (response.status !== 200)
      throw new Error(
        `POST request failed with status [${response.status}] : ${response.statusText}`
      );

    return {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
  } catch (error) {
    console.error('failed to fetchData');
    if (error instanceof AxiosError || error instanceof Error)
      return { error: error.message };

    return { error } as any;
  }
};
