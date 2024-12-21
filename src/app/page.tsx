"use client";

import React from "react";
import { Theme } from "@radix-ui/themes";
import { Card, Box, Text, Button, Container, Flex } from "@radix-ui/themes";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Mock data for the Elo rating chart
const mockEloData = [
  { month: "Jan", rating: 1200 },
  { month: "Feb", rating: 1250 },
  { month: "Mar", rating: 1225 },
  { month: "Apr", rating: 1300 },
  { month: "May", rating: 1275 },
  { month: "Jun", rating: 1350 },
];

// Feature card component
const FeatureCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: React.ReactNode;
}) => {
  return (
    <Card className="h-full bg-[#0A0A0A] border border-[#222222] rounded-xl">
      <Box className="p-4">
        <h3 className="text-lg font-medium mb-2 text-white">{title}</h3>
        {description && (
          <p className="text-sm text-[#666666] mb-3">{description}</p>
        )}
        {children && <div className="mt-4">{children}</div>}
      </Box>
    </Card>
  );
};

// Add this new component at the top of the file
const BackgroundGradient = () => {
  return (
    <div className="fixed inset-0 w-full h-full">
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient
            id="radialGradient"
            cx="50%"
            cy="30%"
            r="70%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="100%" stopColor="#111111" />
          </radialGradient>
        </defs>

        {/* Base background */}
        <rect width="100%" height="100%" fill="url(#radialGradient)" />

        {/* Abstract shapes */}
        <g opacity="0.15">
          {/* Large blob in the background */}
          <path
            d="M50,20 C70,20 85,35 85,60 C85,85 70,95 50,95 C30,95 15,85 15,60 C15,35 30,20 50,20"
            fill="#F56E0F"
            opacity="0.3"
          />

          {/* Top right circle */}
          <circle cx="75" cy="30" r="20" fill="#E55D0E" opacity="0.4" />

          {/* Bottom left ellipse */}
          <ellipse
            cx="30"
            cy="70"
            rx="25"
            ry="15"
            fill="#F56E0F"
            opacity="0.2"
          />
        </g>
      </svg>
    </div>
  );
};

const LandingPage = () => {
  return (
    <Theme appearance="dark" accentColor="orange">
      <div className="min-h-screen bg-transparent relative">
        <div className="fixed inset-0 w-full h-full -z-10">
          <BackgroundGradient />
        </div>
        <div className="relative z-10">
          <Container className="py-16 px-4 md:px-24">
            {/* Hero Section */}
            <Box className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight text-white leading-tight">
                Elevate Your Badminton League
                <br />
                with Versus
              </h1>
              <p className="text-base md:text-lg text-[#8B8D98] mt-6 mb-8 max-w-2xl mx-auto px-4">
                Visualize performance instantly. Validate player progress.
                Versatile Elo rankings.
              </p>
              <Flex
                gap="5"
                justify="center"
                direction={{ initial: "column", sm: "row" }}
              >
                <Button size="3" variant="solid" highContrast>
                  Get Started
                </Button>
                <Button size="3" variant="soft" highContrast>
                  Learn More
                </Button>
              </Flex>
            </Box>

            {/* Features Grid */}
            <div className="space-y-4">
              {/* First row - stack on mobile, 2 columns on desktop */}
              <Text className="text-white text-3xl md:text-4xl font-bold">
                Versus, at a glance
              </Text>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FeatureCard title="Match Management">
                  <img
                    src="/api/placeholder/300/200"
                    alt="Match Management Interface"
                    className="rounded-lg w-full"
                  />
                </FeatureCard>

                <FeatureCard
                  title="Real Time Leaderboards"
                  description="Stay updated with real time rankings every game"
                >
                  <div className="bg-[#0A0A0A] p-3 rounded-lg">
                    <Text size="2" className="text-[#666666] mb-2">
                      Top Players
                    </Text>
                    {["Player 1: 1500", "Player 2: 1450", "Player 3: 1400"].map(
                      (player, i) => (
                        <Text
                          key={i}
                          size="2"
                          className="text-[#8B8D98] leading-relaxed"
                        >
                          {player}
                        </Text>
                      )
                    )}
                  </div>
                </FeatureCard>
              </div>

              {/* Second row - stack on mobile, 3 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FeatureCard
                  title="Dynamic Pairing"
                  description="Pair players automatically or play Sports House mode"
                />

                <FeatureCard title="Statistics">
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockEloData}>
                        <XAxis
                          dataKey="month"
                          stroke="#333333"
                          tick={{ fill: "#666666" }}
                          axisLine={{ stroke: "#222222" }}
                        />
                        <YAxis
                          stroke="#333333"
                          tick={{ fill: "#666666" }}
                          axisLine={{ stroke: "#222222" }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#0A0A0A",
                            border: "1px solid #222222",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="rating"
                          stroke="#F56E0F"
                          strokeWidth={1.5}
                          dot={{ r: 3 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </FeatureCard>

                <FeatureCard title="Elo-based Ranking" />
              </div>
            </div>

            {/* Testimonial - adjust padding for mobile */}
            <Box className="mt-16 text-center px-4 md:px-0">
              <Card className="bg-[#1a1a1a] mx-auto max-w-2xl rounded-xl">
                <Box className="p-4 md:p-6">
                  <p className="text-lg md:text-xl text-white leading-relaxed">
                    &quot;This is such a fun way to play our weekly
                    leagues!&quot;
                  </p>
                  <p className="text-sm text-[#8B8D98] mt-4 font-medium">
                    - A Happy Moderator
                  </p>
                </Box>
              </Card>
            </Box>
          </Container>
        </div>
      </div>
    </Theme>
  );
};

export default LandingPage;
