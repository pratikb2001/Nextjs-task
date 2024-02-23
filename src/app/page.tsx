'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import axios from "axios";


interface Applicant {
  title: string;
  price: number;
  category: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
}



export default function Home() {

  const [applicants, setApplicants] = useState<Applicant[]>([]);

  useEffect(() => {

    try {
      
      const myFunction = async() => {
        const response = await axios.get('https://dummyjson.com/products');
        console.log(response.data.products[0].title)
        setApplicants(response.data.products)
      
      }

      myFunction()

    } catch (error) {
      console.error(error)
    }

  }, []);

  

  console.log(applicants)

  return (
    <div>
      <div className="flex md:flex-row flex-col md:justify-between">
        <div className="text-center md:text-left">
          <h1 className="font-semibold text-xl">General Aptitude</h1>
        </div>
        <div className="text-center md:text-left">
          <Button
            variant="outline"
            className="bg-white-500 rounded-full text-green-500 mx-2 my-3 md:my-0"
          >
            Preview Question
          </Button>
          <Button
            variant="outline"
            className="bg-green-500 rounded-full text-white"
          >
            Share Test Link
          </Button>
        </div>
      </div>

      <button className=""></button>

      <Tabs defaultValue="account" className="w-full mb-8 text-center md:text-left">
        <TabsList className="bg-white flex-col md:flex-row md:h-[25px] h-[200px] ">
          <TabsTrigger value="Overview">Overview</TabsTrigger>
          <TabsTrigger value="Question">Add Question</TabsTrigger>
          <TabsTrigger value="Grade">Time & Grade</TabsTrigger>
          <TabsTrigger value="Instructions">Test Instructions</TabsTrigger>
          <TabsTrigger value="Information">Candidate Information</TabsTrigger>
          <TabsTrigger
            value="Results"
            className="focus:text-green-500 text-green-500"
          >
            Results
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Results">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="grow md:my-5">
              <CardHeader>
                <CardDescription>Total Applicants</CardDescription>
                <CardTitle>1,239</CardTitle>
              </CardHeader>
              <CardContent className="flex md:justify-start justify-center gap-1 ">
                <FaArrowUp className="text-green-500" />
                <p>210 this week</p>
              </CardContent>
            </Card>

            <Card className="grow md:my-5">
              <CardHeader>
                <CardDescription>Total Applicants Cleared</CardDescription>
                <CardTitle>322</CardTitle>
              </CardHeader>
              <CardContent className="flex md:justify-start justify-center gap-1 ">
                <FaArrowUp className="text-green-500" />
                <p>59 this week</p>
              </CardContent>
            </Card>

            <Card className="grow md:my-5">
              <CardHeader>
                <CardDescription>Total Questions</CardDescription>
                <CardTitle>10 Questions</CardTitle>
              </CardHeader>
              <CardContent className="flex md:justify-start justify-center gap-1 ">
                <FaArrowUp className="text-green-500" />
                <p>3 Sections</p>
              </CardContent>
            </Card>

            <Card className="grow md:my-5">
              <CardHeader>
                <CardDescription>Time Limit</CardDescription>
                <CardTitle>20 Mins</CardTitle>
              </CardHeader>
            </Card>

          </div>
        </TabsContent>
      </Tabs>

      {/* table tab */}

      <Tabs defaultValue="account">
        <TabsList className="bg-white md:flex-nowrap flex-wrap mb-7 md:mb-0 ">
          <TabsTrigger value="Performers" className="rounded-full bg-gray-100">
            Top Performers
          </TabsTrigger>
          <TabsTrigger value="Applicants" className="rounded-full --tab-bg:green">
            All Applicants
          </TabsTrigger>
          <TabsTrigger value="Shortlisted" className="rounded-full bg-gray-100">
            Shortlisted
          </TabsTrigger>
          <TabsTrigger value="Selected" className="rounded-full bg-gray-100">
            Selected
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Performers">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="Applicants">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="">
                  <Checkbox />
                </TableHead>
                <TableHead className="">#</TableHead>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Mark</TableHead>
                <TableHead>Last Salary</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Pin Code</TableHead>
                {/* <TableHead>Date & Time</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>


              {applicants.map(applicant => (
                <TableRow>
                  <TableCell>{applicant.title}</TableCell>
                  <TableCell>{applicant.price}</TableCell>
                  <TableCell>{applicant.category}</TableCell>
                  <TableCell>{applicant.discountPercentage}</TableCell>
                  <TableCell>{applicant.rating}</TableCell>
                  <TableCell>{applicant.stock}</TableCell>
                  <TableCell>{applicant.brand}</TableCell>

                </TableRow>
              ))}



              

            </TableBody>
          </Table>
        </TabsContent>

      </Tabs>
    </div>
  );
}
