import React from "react";

interface DashboardStatCardProps {
  title: string;
  stat: string | number;
}

// do something with the width to make it constant, also need to account for mobile display but will do that later (maybe use grid -- see yims about page)

const DashboardStatCard = ({ title, stat }: DashboardStatCardProps) => {
  return (
    <div className="flex flex-col p-5 bg-stone-200 rounded-lg items-center shadow-md max-w-1/6 min-w-40 justify-center">
      <h2 className="text-3xl">{stat}</h2>
      <p>{title}</p>
    </div>
  );
};

export default DashboardStatCard;
