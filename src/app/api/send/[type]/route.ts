import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const {
      ...creds
    } = await req.json();
      await axios({
        url: 'http://localhost:4000/api/clients',
        method: 'POST',
        data: creds
      });

    return NextResponse.json(true);
  } catch (e: any) {
    return NextResponse.json({ message: e.message || "Could not fetch." }, { status: 500 });
  }
}