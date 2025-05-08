import toast from "react-hot-toast";
import { IShippingAddressPost } from "../features/ShippingAddress/useUpdateShippingAddress";
import { IAvatar } from "../features/ProfileImage/useUpdateAvatar";
import API_URL from "../utils/apiUrl";

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
    const res = await fetch(`${API_URL}/api/auth/signup`, {
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
    const res = await fetch(`${API_URL}/api/auth/login`, {
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

export async function logoutFromAccountApi() {
  try {
    const res = await fetch(`${API_URL}/api/auth/logout`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      toast.error("Something went wrong!");
      throw new Error("Something went wrong");
    }

    return;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}

export async function checkAuthApi() {
  try {
    const res = await fetch(`${API_URL}/api/auth/verifyAuth`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data;
  } catch {
    return null;
  }
}

export async function getShippingAddressApi() {
  try {
    const res = await fetch(`${API_URL}/api/account/shippingAddress`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      credentials: "include",
    });

    if (!res.ok) {
      const error = await res.json();

      throw new Error(error.message);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(error as string);
  }
}

export async function updateShippingAddressApi(
  dataShipping: IShippingAddressPost
) {
  try {
    const res = await fetch(`${API_URL}/api/account/updateShippingAddress`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataShipping),
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

export async function updateProfileAvatarApi(dataProf: IAvatar) {
  try {
    const res = await fetch(`${API_URL}/api/auth/update-profile`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(dataProf),
    });

    console.log(res);

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
