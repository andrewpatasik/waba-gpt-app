import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const postData = async (
  pathname = "",
  data: any
) => {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.WABA_SYSTEM_TOKEN}`,
    };
    const method = "post";

    const response = await axios(
      `${process.env.BASE_URL}/${process.env.WABA_ID}/${pathname}`,
      {
        method,
        headers,
        data,
      }
    );

    if (response.status !== 200)
      throw new Error("something not right: ", { cause: response.statusText });

    return {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
  } catch (error:any) {
    console.log("[ERROR]: ", error.message);

    return { error: "Failed to fetch" };

  }
};

export const fetchData = async (
  accountId = process.env.WABA_ID,
  pathname = ""
) => {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.WABA_SYSTEM_TOKEN}`,
    };

    const response = await axios(
      `${process.env.BASE_URL}/${accountId}/${pathname}`,
      {
        headers,
      }
    );

    if (response.status !== 200)
      throw new Error("something not right: ", { cause: response.statusText });

    return {
      status: response.status,
      message: response.statusText,
      data: response.data,
    };
  } catch (error) {
    console.error("[ERROR]: ", error);

    return { error: "Failed to fetch" };
  }
};
