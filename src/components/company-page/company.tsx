"use client";

import Image from "next/image";
import React, { useRef } from "react";
import Logo from "../../../public/assets/icon/logo.svg";
import { Button } from "../ui/button";
import { useForm, Controller } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formFields } from "@/utils/formFields";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormData = {
  [key: string]: string;
};

const Company: React.FC = () => {
  const formMethods = useForm<FormData>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = formMethods;

  const form = useForm();

  const onSubmit = (data: FormData, e: any) => {
    e.preventDefault();
    console.log("onSubmit", data);
  };

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-start justify-center md:justify-between">
        <div className="flex items-center justify-center order-last md:order-1 my-4">
          <Image src={Logo} alt="" width="108" height="108" />
          <div className="ml-[25px]">
            <div className="flex">
              <Button variant="destructive" className="mr-[10px] text-[12px]">
                Remove
              </Button>
              <Button variant="outline" className="text-[12px]">
                Change Photo
              </Button>
            </div>
            <span className="text-sm text-[#17171F66]">
              or drag and drop (SVG, PNG, JPG)
            </span>
          </div>
        </div>
        <div className="order-1 md:order-last my-4 flex">
          <Button variant="outline" className="mr-[10px] w-full text-[12px]">
            Cancel
          </Button>
          <Button
            variant="default"
            className="text-[12px] w-full"
            onClick={handleSubmit(onSubmit)}
          >
            Save changes
          </Button>
        </div>
      </div>
      <Form {...form}>
        <form>
          <div className="grid md:grid-cols-2 gap-6">
            {formFields.slice(0, 4).map((field, index) => (
              <div key={index}>
                <label htmlFor={field.name} className="text-[#17171FCC]">
                  {field.label}
                </label>
                <Controller
                  name={field.name}
                  control={control}
                  rules={field.rules}
                  render={({ field: controllerField }: any) => (
                    <Input
                      placeholder={field.placeholder}
                      type={field.type}
                      {...controllerField}
                    />
                  )}
                />
                {errors[field.name] && (
                  <span className="text-red-800 text-[12px]">
                    {errors[field.name]?.message}
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            {formFields.slice(4, 8).map((field, index) => (
              <div key={index} className="grid">
                {field.name === "employee_count" ? (
                  <div className="mb-6 mt-4">
                    <label
                      className="-mt-6 mb-2 block text-[#17171FCC]"
                      htmlFor={field.name}
                    >
                      {field.label}
                    </label>
                    <Controller
                      name={field.name}
                      control={control}
                      rules={field.rules}
                      render={({ field }) => (
                        <div>
                          <Badge
                            variant="default"
                            className="p-2 mr-2"
                            {...field}
                          >
                            1-10
                          </Badge>
                          <Badge
                            variant="outline"
                            className="p-2 mx-2"
                            {...field}
                          >
                            10-100
                          </Badge>
                          <Badge
                            variant="outline"
                            className="p-2 mx-2"
                            {...field}
                          >
                            100-500
                          </Badge>
                          <Badge
                            variant="outline"
                            className="p-2 mx-2"
                            {...field}
                          >
                            1000+
                          </Badge>
                        </div>
                      )}
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor={field.name} className="text-[#17171FCC]">
                      {field.label}
                    </label>
                    <Controller
                      name={field.name}
                      control={control}
                      rules={field.rules}
                      render={({ field: controllerField }: any) => (
                        <Input placeholder={field.placeholder} type={field.type} {...controllerField} className="mb-6" />
                      )}
                    />
                  </div>
                )}
                {field.name === "company_description" && (
                  <label
                    className="-mt-6 mb-5 text-sm text-[#17171F99]"
                    htmlFor={field.name}
                  >
                    Your detailed company description
                  </label>
                )}
                {errors[field.name] && (
                  <span className="text-red-800 text-[12px] mb-5 -mt-5">
                    {errors[field.name]?.message}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {formFields.slice(8, 10).map((field, index) => (
              <div key={index}>
                {field.name === "funding_round" && (
                  <div>
                    <label htmlFor={field.name} className="text-[#17171FCC]">
                      {field.label}
                    </label>
                    <Select>
                      <SelectTrigger className="">
                        <SelectValue placeholder="Seed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Seed</SelectItem>
                        <SelectItem value="dark">Development</SelectItem>
                        <SelectItem value="system">Launch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                {field.name === "faqs" && (
                  <div>
                    <label htmlFor={field.name} className="text-[#17171FCC]">
                      {field.label}
                    </label>
                    <Controller
                      name={field.name}
                      control={control}
                      rules={field.rules}
                      render={({ field: controllerField }: any) => (
                        <Input placeholder={field.placeholder} type={field.type} {...controllerField} />
                      )}
                    />
                    {errors[field.name] && (
                      <span className="text-red-800 text-[12px]">
                        {errors[field.name]?.message}
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Company;
