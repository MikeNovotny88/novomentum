"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";

export default function ROICalculatorPage() {
  const [employees, setEmployees] = useState(25);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [hoursLost, setHoursLost] = useState(5);

  const annualSavings = useMemo(() => {
    return employees * hourlyRate * hoursLost * 52;
  }, [employees, hourlyRate, hoursLost]);

  const annualHours = useMemo(() => {
    return employees * hoursLost * 52;
  }, [employees, hoursLost]);

  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-36">

        <Section>

          <Container>

            <Badge>ROI Calculator</Badge>

            <div className="mt-8 max-w-4xl">

              <h1 className="text-6xl font-black">
                How much time is manual work costing your business?
              </h1>

              <p className="mt-8 text-xl leading-9 text-slate-400">
                Estimate how much your organization could save by automating repetitive work.
              </p>

            </div>

          </Container>

        </Section>

        <Section>

          <Container>

            <div className="grid gap-10 lg:grid-cols-2">

              <Card>

                <label className="block">
                  <p className="mb-3 font-semibold">
                    Employees
                  </p>

                  <input
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full rounded-xl border border-white/10 bg-black px-5 py-4"
                  />
                </label>

                <label className="mt-8 block">
                  <p className="mb-3 font-semibold">
                    Average Hourly Wage
                  </p>

                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full rounded-xl border border-white/10 bg-black px-5 py-4"
                  />
                </label>

                <label className="mt-8 block">
                  <p className="mb-3 font-semibold">
                    Hours Lost Per Week
                  </p>

                  <input
                    type="number"
                    value={hoursLost}
                    onChange={(e) => setHoursLost(Number(e.target.value))}
                    className="w-full rounded-xl border border-white/10 bg-black px-5 py-4"
                  />
                </label>

              </Card>

              <Card>

                <h2 className="text-4xl font-black">
                  Estimated Annual Impact
                </h2>

                <div className="mt-10">

                  <p className="text-slate-400">
                    Time Saved
                  </p>

                  <h3 className="mt-2 text-5xl font-black text-cyan-400">
                    {annualHours.toLocaleString()} hrs
                  </h3>

                </div>

                <div className="mt-10">

                  <p className="text-slate-400">
                    Estimated Labor Value
                  </p>

                  <h3 className="mt-2 text-5xl font-black text-cyan-400">
                    ${annualSavings.toLocaleString()}
                  </h3>

                </div>

                <div className="mt-12">

                  <Button href="/contact">
                    Book Free Strategy Call
                  </Button>

                </div>

              </Card>

            </div>

          </Container>

        </Section>

      </main>

      <Footer />
    </>
  );
}