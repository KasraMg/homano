"use client"

import { useForm, Controller, useWatch } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../../../ui/select"

type FormValues = {
  fname: string
  lname: string
  phone: string
  email?: string
  province: string
  city: string
  post: string
  street: string
}

type Props = {
  onSubmit: (data: FormValues) => void
}

const provinces = [
  {
    name: "فارس",
    cities: ["شیراز", "مرودشت"]
  },
  {
    name: "تهران",
    cities: ["تهران", "ری", "پردیس"]
  }
]

const CheckoutForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<FormValues>()

  const selectedProvince = useWatch({
    control,
    name: "province"
  })

  const cities =
    provinces.find((p) => p.name === selectedProvince)?.cities || []

  return (
    <form
      id="checkout-form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full xl:!w-3/5"
    >
      <div className="space-y-6 bg-white shadow-m rounded-xl p-6 w-full">
        <div className="text-black text-xl">اطلاعات تماس</div>

        <div className="flex gap-3">
          <div className="w-full">
            <input
              {...register("fname", { required: "نام الزامی است" })}
              placeholder="نام"
              className={`w-full border p-2 rounded-md ${
                errors.fname ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.fname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.fname.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              {...register("lname", { required: "نام خانوادگی الزامی است" })}
              placeholder="نام خانوادگی"
              className={`w-full border p-2 rounded-md ${
                errors.lname ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.lname && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lname.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <input
            {...register("phone", { required: "شماره تلفن الزامی است" })}
            placeholder="شماره تلفن"
            className={`w-full border p-2 rounded-md ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone.message}
            </p>
          )}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="ایمیل (اختیاری)"
            className="w-full border p-2 rounded-md border-gray-300"
          />
        </div>
      </div>

      <div className="space-y-6 bg-white shadow-m rounded-xl p-6 w-full">
        <div className="text-black text-xl">آدرس ارسال</div>

        <div className="flex gap-3">
          <div className="w-full">
            <Controller
              control={control}
              name="province"
              rules={{ required: "انتخاب استان الزامی است" }}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => {
                    field.onChange(value)
                    setValue("city", "")
                  }}
                  value={field.value}
                >
                  <SelectTrigger
                    className={
                      errors.province ? "border-red-500 w-full !h-11" : "w-full !h-11"
                    }
                  >
                    <SelectValue placeholder="انتخاب استان" />
                  </SelectTrigger>
                  <SelectContent>
                    {provinces.map((province) => (
                      <SelectItem
                        key={province.name}
                        value={province.name}
                      >
                        {province.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.province && (
              <p className="text-red-500 text-sm mt-1">
                {errors.province.message}
              </p>
            )}
          </div>

          <div className="w-full">
            <Controller
              control={control}
              name="city"
              rules={{ required: "انتخاب شهر الزامی است" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={!selectedProvince}
                >
                  <SelectTrigger
                    className={
                      errors.city ? "border-red-500 w-full !h-11" : "w-full !h-11"
                    }
                  >
                    <SelectValue placeholder="انتخاب شهر" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">
                {errors.city.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <input
            {...register("post", { required: "کد پستی الزامی است" })}
            placeholder="کد پستی"
            className={`w-full border p-2 rounded-md ${
              errors.post ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.post && (
            <p className="text-red-500 text-sm mt-1">
              {errors.post.message}
            </p>
          )}
        </div>

        <div>
          <textarea
            {...register("street", { required: "آدرس الزامی است" })}
            placeholder="آدرس"
            className={`w-full border p-2 rounded-md ${
              errors.street ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.street && (
            <p className="text-red-500 text-sm mt-1">
              {errors.street.message}
            </p>
          )}
        </div>
      </div>
    </form>
  )
}

export default CheckoutForm
