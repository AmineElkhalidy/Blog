import React from "react";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import Header from "./Header";
import Social from "./Social";
import BackButton from "./BackButton";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  screen?: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  screen,
}: CardWrapperProps) => {
  return (
    <Card className="w-[450px] shadow-lg">
      <CardHeader>
        <Header label={headerLabel} screen={screen} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter className="flex flex-col gap-y-3">
          <div className="w-full flex items-center gap-x-4">
            <div className="w-full h-[2px] bg-muted" />
            <p className="text-base text-muted-foreground">or</p>
            <div className="w-full h-[2px] bg-muted" />
          </div>
          <Social />
        </CardFooter>
      )}

      <CardFooter className="w-full flex justify-center">
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
