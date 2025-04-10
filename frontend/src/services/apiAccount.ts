export interface IRegisterData {
  email: string;
  password: string;
  displayName: string;
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

    console.log(res);

    if (!res.ok) {
      const error = await res.json();
      console.log(error);

      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}
