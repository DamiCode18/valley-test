import { Button } from "@/components/ui/button";
import Company from "@/components/company-page/company";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

export default function Home() {
  return (
    <main className="mt-24 container">
      <h1 className="text-4xl my-4">Settings</h1>
      <Tabs defaultValue="company-info">
        <TabsList className="my-4 p-0 md:p-[6px] rounded-xl h-[46px] sm:max-w-[581px] bg-[#fafafa] max-w-[300px] overflow-scroll justify-start">
          <TabsTrigger value="your-profile" className="justify-start">Your Profile</TabsTrigger>
          <TabsTrigger value="company-info">Company Info</TabsTrigger>
          <TabsTrigger value="manage-seats">Manage Seats</TabsTrigger>
          <TabsTrigger value="do-not-contact">Do not Contact</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
        </TabsList>
        <TabsContent value="your-profile">
          Your-profile components goes in here
        </TabsContent>
        <TabsContent value="company-info">
          <Company />
        </TabsContent>
        <TabsContent value="manage-seats">
          Manage-seats components goes in here
        </TabsContent>
        <TabsContent value="do-not-contact">
          Do-not-contact components goes in here
        </TabsContent>
        <TabsContent value="integrations">
          Integrations components goes in here
        </TabsContent>
      </Tabs>
    </main>
  );
}
