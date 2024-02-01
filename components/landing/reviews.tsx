"use client";
import React from "react";
import { Separator } from "../ui/separator";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

const Reviews = (props: Props) => {
  const reviews = [
    {
      header: "Energy bills slashed, savings soaring!",
      description:
        "I'm thrilled ecoNest helped install solar panels on my California home. Incentives cut costs by 50%, electric bill dropped from $175 to just $25 per month!",
      name: "Lucas S., Bakersfield, CA",
    },
    {
      header: "EcoNest expertise, my utility bills' savior!",
      description:
        "Upgraded appliances and lighting to ENERGY STAR models with ecoNest's help. Now saving $60 per month on utility bills!",
      name: "Ashley P., Seattle, WA",
    },
    {
      header: "Game-changer for my energy bills!",
      description:
        "Thankful for ecoNest! They showed me adding insulation would be a game-changer. Heating costs reduced by $85 each winter month since insulating my attic with ecoNest.",
      name: "Juan R., Boston, MA",
    },
    {
      header: "Affordable heat pump, hefty savings!",
      description:
        "Best decision last year - switched to an affordable heat pump with ecoNest. Slashed energy bills by $250 a month!",
      name: "Alicia V., Minneapolis, MN",
    },
    {
      header: "Rainwater harvesting, a smart investment!",
      description:
        "Thrilled with ecoNest's services! Installed rainwater harvesting system in Phoenix home, reducing summer water bills by $35 per month.",
      name: "Marco T., Phoenix, AZ",
    },
    {
      header: "ENERGY STAR appliances, a money-saving move!",
      description:
        "Fantastic money-saving move - new ENERGY STAR-certified appliances with ecoNest's help. Washer, dryer, and fridge now save $50 per month on utilities!",
      name: "Sofia G., Miami, FL",
    },
    {
      header: "Greywater system, positive change!",
      description:
        "Positive change with ecoNest! Added greywater system, saving $65 monthly on water bills by reusing water on my Bay Area landscape.",
      name: "Kunal S., San Jose, CA",
    },
    {
      header: "Weatherized home, winter bills down!",
      description:
        "Thanks to ecoNest for weatherizing my 60-year-old Buffalo home! Insulation added to walls and floors saves $150 every winter month now.",
      name: "Natalie B., Buffalo, NY",
    },
    {
      header: "Geothermal system, best decision ever!",
      description:
        "Switched to geothermal heating and cooling with ecoNest - best decision! Energy bills reduced by over $200 per month since installing the system.",
      name: "Samuel C., St. Louis, MO",
    },
    {
      header: "Energy-efficient upgrades, monthly savings!",
      description:
        "Glad I used ecoNest's services to make my Portland home energy efficient. Upgrades lowered monthly utility bills by $100 already!",
      name: "Olivia P., Portland, OR",
    },
    {
      header: "Smart rebates, cost-effective upgrades!",
      description:
        "Incredible experience with ecoNest - found huge rebates in Utah. Upgraded windows and got a smart thermostat. Out-of-pocket cost only $2,000 thanks to ecoNest!",
      name: "Adrian G., Salt Lake City, UT",
    },
    {
      header: "Electric vehicle savings, genius move!",
      description:
        "Genius move with ecoNest! Used experts to buy a new electric vehicle with big rebates. Saving $150 monthly not buying gas for my old car!",
      name: "Martin S., Denver, CO",
    },
    {
      header: "Solar hot water, bills reduced!",
      description:
        "Amazing change with ecoNest - added solar hot water system. Reduced gas bills by $250 per month for water heating at my Asheville Inn!",
      name: "Elizabeth J., Asheville, NC",
    },
    {
      header: "Insulation magic, heating bills dropped!",
      description:
        "One of the best moves ever - boosted Chicago home's insulation through ecoNest. Heating bills dropped by $100 per month since installing it!",
      name: "Lucas C., Chicago, IL",
    },
    {
      header: "HVAC upgrades, monthly savings!",
      description:
        "Glad I had ecoNest install smart thermostats and upgrade my HVAC system. Improvements save $130 monthly on Dallas utility bills!",
      name: "Aaliyah M., Dallas, TX",
    },
    {
      header: "LED lighting, a smart decision!",
      description:
        "Smart decision with ecoNest - switched lighting to LEDs. Already saving $40 per month on electricity for my Nashville home!",
      name: "Caleb T., Nashville, TN",
    },
    {
      header: "Grants for efficiency, significant savings!",
      description:
        "Incredible experience with ecoNest - found grants for efficiency upgrades. Now saving $200 a month on utility bills after installing greywater, solar hot water, and new windows!",
      name: "Sophia O., Albuquerque, NM",
    },
    {
      header: "Multiple upgrades, whopping savings!",
      description:
        "Thanks ecoNest for guiding me to add insulation, ENERGY STAR appliances, new windows, and LED lighting. Now saving a whopping $250 per month on bills!",
      name: "Joshua L., Alexandria, VA",
    },
    {
      header: "Ground source heat pump, amazing reduction!",
      description:
        "Amazing reduction with ecoNest - upgraded to a ground source heat pump. Energy bills reduced by $150 each month since installing it!",
      name: "Olivia B., Indianapolis, IN",
    },
    {
      header: "Solar panels, cost-effective and efficient!",
      description:
        "Best decision ever - installed solar panels through ecoNest's experts. After incentives, costs were only $5k and saving $100 per month on electricity!",
      name: "Noah K., Honolulu, HI",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="flex w-full flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className=" mb-1 text-center text-xl font-black text-primary"
        >
          From Our Customers
          <Separator className="h-[3px] rounded-full bg-primary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className=" text-4xl font-bold text-emerald-900 sm:text-5xl"
        >
          We Are Changing Lives
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          className="mt-4 text-balance text-base font-medium leading-loose text-emerald-900"
        >
          We&apos;ve proudly helped thousands of homeowners to switch to clean
          energy nationwide.
        </motion.div>
      </div>

      <div className="z-10 mt-11 grid h-[80rem] max-h-[150vh] grid-cols-1 gap-8 [mask-image:_linear-gradient(to_bottom,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex  w-full flex-col overflow-y-hidden">
          <div className="flex w-full animate-infinite-scroll-y flex-col">
            {reviews.slice(0, 7).map((review, index) => (
              <Review
                key={`${review.name}-${index}`}
                header={review.header}
                description={review.description}
                name={review.name}
              />
            ))}

            {reviews.slice(0, 7).map((review, index) => (
              <Review
                key={`${review.name}-${index}`}
                header={review.header}
                description={review.description}
                name={review.name}
              />
            ))}
          </div>
        </div>

        <div className="relative hidden flex-col overflow-y-hidden  md:flex">
          <div className="flex animate-infinite-scroll-y flex-col">
            {reviews.slice(7, 11).map((review, index) => (
              <Review
                key={`${review.name}-${index}`}
                header={review.header}
                description={review.description}
                name={review.name}
              />
            ))}

            {reviews.slice(7, 11).map((review, index) => (
              <Review
                key={`${review.name}-${index}`}
                header={review.header}
                description={review.description}
                name={review.name}
              />
            ))}
          </div>
        </div>

        <div className="relative  hidden flex-col  overflow-y-hidden lg:flex">
          <div className="flex animate-infinite-scroll-y flex-col">
            {reviews.slice(12, reviews.length).map((review, index) => (
              <Review
                key={`${review.name}-${index}`}
                header={review.header}
                description={review.description}
                name={review.name}
              />
            ))}

            {reviews.slice(12, reviews.length).map((review, index) => (
              <Review
                key={`${review.name}-${index}`}
                header={review.header}
                description={review.description}
                name={review.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Review = ({
  header,
  description,
  name,
}: {
  header: string;
  description: string;
  name: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-4 flex w-full flex-col rounded-3xl border border-border bg-white p-6 shadow-xl shadow-gray-900/5"
    >
      <div className="flex gap-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star className="fill-primary stroke-0" key={index} />
        ))}
      </div>

      <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
        {header}
      </p>

      <p className="mt-3 text-base leading-7">{description}</p>

      <div className="mt-3 text-sm font-medium text-gray-600 before:content-['–_']">
        {name}
      </div>
    </motion.div>
  );
};

export default Reviews;
