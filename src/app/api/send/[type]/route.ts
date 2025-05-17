import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      ...creds
    } = await req.json();
      await axios({
        url: `${process.env.SERVER_URL}/api/clients`,
        method: 'POST',
        data: creds
      });

    return NextResponse.json(true);
  } catch (e: any) {
    return NextResponse.json({ message: e.message || "Could not fetch." }, { status: 500 });
  }
}