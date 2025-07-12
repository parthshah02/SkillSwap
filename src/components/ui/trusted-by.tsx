import React from 'react';
import { Marquee } from "./marquee";

const companies = [
  {
    name: "Odoo",
    logo: (
      <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Odoo
      </span>
    ),
  },
  {
    name: "Microsoft",
    logo: (
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Microsoft
      </span>
    ),
  },
  {
    name: "Google",
    logo: (
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
        Google
      </span>
    ),
  },
  {
    name: "Amazon",
    logo: (
      <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
        Amazon
      </span>
    ),
  },
  {
    name: "Netflix",
    logo: (
      <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-900 bg-clip-text text-transparent">
        Netflix
      </span>
    ),
  },
];

export function TrustedBy() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-sm font-medium text-muted-foreground mb-8">
          TRUSTED BY INNOVATIVE TEAMS
        </h2>
        <div className="relative
          before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent
          after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent">
          <Marquee pauseOnHover className="[--duration:40s]">
            {companies.map((company, index) => (
              <div key={index} className="px-8 py-2">
                <div className="flex items-center justify-center h-10">
                  {company.logo}
                </div>
              </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:50s] mt-4">
            {[...companies].reverse().map((company, index) => (
              <div key={`reverse-${index}`} className="px-8 py-2">
                <div className="flex items-center justify-center h-10">
                  {company.logo}
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
