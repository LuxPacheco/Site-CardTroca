import { NextResponse } from "next/server";

export function GET() {
  const aasa = {
    applinks: {
      details: [
        {
          appIDs: ["XNXZUJB43Q.io.cardtroca"],
          components: [
            {
              "/": "/*",
              comment: "Matches all URLs",
            },
          ],
        },
      ],
    },
    webcredentials: {
      apps: ["XNXZUJB43Q.io.cardtroca"],
    },
  };

  return NextResponse.json(aasa, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
