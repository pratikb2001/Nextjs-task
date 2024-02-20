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








export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="font-semibold text-xl">General Aptitude</h1>
        </div>
        <div>
          <Button
            variant="outline"
            className="bg-white-500 rounded-full text-green-500 mx-2"
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
      <Tabs defaultValue="account" className="w-full mb-8 ">
        <TabsList className="bg-white">
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
          <div className="flex gap-4">
            <Card className="grow">
              <CardHeader>
                <CardDescription>Total Applicants</CardDescription>
                <CardTitle>1,239</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-1 ">
                <FaArrowUp className="text-green-500" />
                <p>210 this week</p>
              </CardContent>
            </Card>

            <Card className="grow">
              <CardHeader>
                <CardDescription>Total Applicants Cleared</CardDescription>
                <CardTitle>322</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-1 ">
                <FaArrowUp className="text-green-500" />
                <p>59 this week</p>
              </CardContent>
            </Card>

            <Card className="grow">
              <CardHeader>
                <CardDescription>Total Questions</CardDescription>
                <CardTitle>10 Questions</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-1 ">
                <FaArrowUp className="text-green-500" />
                <p>3 Sections</p>
              </CardContent>
            </Card>

            <Card className="grow">
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
        <TabsList className="bg-white">
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
                <TableHead>Date & Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>

              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">1</TableCell>
                <TableCell className="font-medium">Balamurugan</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />40%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>15000</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">2</TableCell>
                <TableCell className="font-medium">Shugumar</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />70%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">3</TableCell>
                <TableCell className="font-medium">VijayKumar</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />70%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>12500</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">4</TableCell>
                <TableCell className="font-medium">AjayKumar.S</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />10%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>5000</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">5</TableCell>
                <TableCell className="font-medium">V.Dhawan</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />70%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>-</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">6</TableCell>
                <TableCell className="font-medium">Guhan M</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />40%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>30,000</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">7</TableCell>
                <TableCell className="font-medium">Mohanraj S</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />30%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>14,500</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium">8</TableCell>
                <TableCell className="font-medium">Thirumuguram</TableCell>
                <TableCell className="font-medium">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />3  0%
                    </div>
                  </RadioGroup>
                </TableCell>
                <TableCell>12,500</TableCell>
                <TableCell>2742090989</TableCell>
                <TableCell>2832893</TableCell>
                <TableCell>27 Sep'22 11:15AM</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </div>
  );
}
