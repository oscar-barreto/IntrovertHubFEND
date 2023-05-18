import {Card, CardHeader, CardBody, CardFooter, Typography, Button} from "@material-tailwind/react";
import { Link } from "react-router-dom";

// export function Home() {
//   return (
//     <div>
//       <HomeIcon className="h-6 w-6 text-blue-500" />
//       <h1 className="text-3xl font-bold underline">Hello world!</h1>
//     </div>
//   );
// }

export function Home(){
  return (
    <>
      <div className="bg-slate-900 container-fluid m-0 p-0 h-screen content-center flex justify-center">
      <Card className="mt-6 w-100 bg-slate-100">
      <CardHeader color="blue-gray" className="relative h-100 w-100">
        <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
      </CardHeader>
      <CardBody className="bg-slate-100">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          Welcome to IntrovertHub
        </Typography>
        <Typography>
          Designed for introverts, for introverts, to meet introverts. With the safety and security of their screen
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 bg-slate-100">
      <Link className="text-purple-700" to="/login" >
        <Button className="text-purple-700 bg-purple-700 text-lg text-white  m-2">Log In</Button>
        </Link>
        <Link className="text-purple-700 text-purple-700 m-2 text-lg" to="/signup" >Sign up</Link>
      </CardFooter>
    </Card>
      </div>
    </>
  )
}