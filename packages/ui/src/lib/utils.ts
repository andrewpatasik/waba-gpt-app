import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchData = async ( pathname = '') => {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.WABA_SYSTEM_TOKEN}`,
    };

    const response = await axios(`${process.env.BASE_URL}/484528214737576/${pathname}`, {
      headers,
    });

    if (response.status !== 200)
      throw new Error("something not right: ", { cause: response.statusText });

    return {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
  } catch (error) {
    console.error('[ERROR]: ', error);

    return { error: 'Failed to fetch'}
  }
};
