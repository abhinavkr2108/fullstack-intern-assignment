"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import useAuthSession from "@/hooks/useAuthSession";
import { clearAuth } from "@/redux/auth/auth.slice";
import { useAppDispatch } from "@/redux/store";
import React, { useEffect } from "react";
import { toast } from "sonner";

export default function DashboardPage() {
  const dispatch = useAppDispatch();
  const user = useAuthSession();
  useEffect(() => {
    if (!user) {
      window.location.href = "/";
    }
  }, [user]);

  const logoutUser = () => {
    localStorage.removeItem("token");
    dispatch(clearAuth());
    window.location.href = "/";
    toast.success("Logout successful");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Card className="max-w-md sm:m-4">
        <CardHeader>
          <h1 className="text-xl md:text-2xl font-bold text-center">
            Welcome {user?.username}
          </h1>
          <CardDescription className="text-center">
            This is the dashboard route which is protected.
          </CardDescription>
        </CardHeader>
        <CardContent>
          This is take home assignment for The Moon Devs. Things Implemented in
          this assignment:
          <ul>
            <li>Redux Toolkit</li>
            <li>Authentication Route: JWT to store user data in tokens</li>
            <li>Protected Routes: Protecting routes based on JWT token</li>
            <li>ShadcnUI: Card and Toast components are used from shadcn</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full"
            onClick={logoutUser}
            variant={"destructive"}
          >
            Logout
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
