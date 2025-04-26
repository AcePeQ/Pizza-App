import { Controller, SubmitHandler, useForm } from "react-hook-form";
import FormInput from "../../components/FormInput/FormInput";
import Select from "react-select";
import countryOptions from "../../utils/CountryOptions";
import Button from "../../components/Button/Button";
import { useGetShippingAddress } from "./useGetShippingAddress";
import Loader from "../../components/Loaders/Loader/Loader";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useUpdateShippingAddress } from "./useUpdateShippingAddress";

interface IShippingAddress {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  zipCode: string;
  address: string;
  country: string;
}

const inputStyles = `text-stone-800 bg-amber-50 border-none px-1.5 py-0.5 rounded-sm text-semibold rounded-[0.125rem] transition-all duration-500 outline-2 outline-offset-1 outline-transparent focus-within:outline-2 focus-within:outline-offset-1 focus-within:outline-amber-50 text-xl`;

function ShippingAddress({
  onNextPage,
  onPreviousPage,
}: {
  onNextPage: () => void;
  onPreviousPage: () => void;
}) {
  const navigate = useNavigate();
  const { updateShippingAddress, isUpdatingShippingAddress } =
    useUpdateShippingAddress();

  const { isGettingShippingAddress, isShippingAddressError, shippingData } =
    useGetShippingAddress() as {
      shippingData: IShippingAddress;
      isGettingShippingAddress: boolean;
      isShippingAddressError: boolean;
    };

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<IShippingAddress>();

  useEffect(() => {
    if (shippingData) {
      reset({ ...shippingData });
    }
  }, [reset, shippingData]);

  if (isGettingShippingAddress) {
    return <Loader />;
  }

  if (isShippingAddressError) {
    navigate("/", { replace: true });
    return;
  }

  const onSubmit: SubmitHandler<IShippingAddress> = (data) => {
    console.log(data);
    updateShippingAddress(
      { ...data, userId: shippingData.userId },
      {
        onSuccess: () => {
          onNextPage();
        },
        onError: () => {
          reset({ ...shippingData });
        },
      }
    );
  };

  return (
    <form
      className="flex flex-col gap-5 text-amber-50 bg-stone-800 py-8 px-2.5 sm:rounded-2xl sm:px-8 max-w-5xl w-full mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-4">
        <FormInput label="First Name" error={errors.firstName?.message}>
          <input
            type="text"
            className={inputStyles}
            id="firstName"
            {...register("firstName", {
              required: "First Name field is required",
            })}
          />
        </FormInput>

        <FormInput label="Last Name" error={errors.lastName?.message}>
          <input
            type="text"
            className={inputStyles}
            id="lastName"
            {...register("lastName", {
              required: "Last Name field is required",
            })}
          />
        </FormInput>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <FormInput label="Country" error={errors.country?.message}>
          <Controller
            name="country"
            control={control}
            rules={{ required: "Country field is required" }}
            render={({ field }) => (
              <Select
                className="basic-single"
                classNamePrefix="select"
                isClearable
                isSearchable
                inputId="country"
                options={countryOptions}
                value={countryOptions.find(
                  (option) => option.value === field.value
                )}
                onChange={(option) => field.onChange(option?.value)}
                name={field.name}
                ref={field.ref}
              />
            )}
          />
        </FormInput>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput label="Phone Number" error={errors.phoneNumber?.message}>
          <input
            type="text"
            className={inputStyles}
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone Number field is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone number must contain only numbers",
              },
            })}
          />
        </FormInput>

        <FormInput label="City" error={errors.city?.message}>
          <input
            type="text"
            className={inputStyles}
            id="city"
            {...register("city", {
              required: "City field is required",
            })}
          />
        </FormInput>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <FormInput label="Address" error={errors.address?.message}>
          <input
            type="text"
            className={inputStyles}
            id="address"
            {...register("address", {
              required: "Address field is required",
            })}
          />
        </FormInput>

        <FormInput label="Zip-Code" error={errors.zipCode?.message}>
          <input
            type="text"
            className={inputStyles}
            id="zipCode"
            {...register("zipCode", {
              required: "Zip-Code field is required",
            })}
          />
        </FormInput>
      </div>

      <div className="w-full flex justify-between">
        <Button
          onClick={onPreviousPage}
          size="big"
          type="tertiary"
          buttonType="button"
          isDisabled={isUpdatingShippingAddress}
        >
          Go Back
        </Button>
        <Button
          size="big"
          type="primary"
          buttonType="submit"
          isDisabled={isUpdatingShippingAddress}
        >
          Go To Summary
        </Button>
      </div>
    </form>
  );
}

export default ShippingAddress;
