import toast from "react-hot-toast";

export interface IRegisterData {
  email: string;
  password: string;
  displayName: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export async function createAccountApi(accountData: IRegisterData) {
  try {
    const res = await fetch("/api/auth/signup", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(accountData),
    });

    if (!res.ok) {
      const error = await res.json();
      toast.error(error.message);

      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}

export async function loginToAccountApi(accountData: ILoginData) {
  try {
    const res = await fetch("/api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(accountData),
    });

    if (!res.ok) {
      const error = await res.json();
      toast.error(error.message);

      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}

export async function checkAuthApi() {
  const res = await fetch("/api/auth/verifyAuth", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    return new Error("Unauthorized");
  }

  const data = await res.json();

  return data;
}
