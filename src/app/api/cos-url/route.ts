import { NextRequest, NextResponse } from "next/server";
import COS from "cos-nodejs-sdk-v5";

const cos = new COS({
  SecretId: process.env.COS_SECRET_ID,
  SecretKey: process.env.COS_SECRET_KEY,
});

export async function GET(request: NextRequest) {
  const key = request.nextUrl.searchParams.get("key");

  if (!key) {
    return NextResponse.json({ error: "Missing key" }, { status: 400 });
  }

  const url = cos.getObjectUrl({
    Bucket: "portfolio-photos-1482278338",
    Region: "ap-hongkong",
    Key: key,
    Sign: true,
    Expires: 3600,
  });

  return NextResponse.json({ url });
}
