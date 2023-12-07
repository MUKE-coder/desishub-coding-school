"use client";
import { Copy } from "lucide-react";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
export default function CopyContent({ email = "", regNo = "" }) {
  return (
    <div>
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <p className="py-2 px-4 bg-slate-100 rounded-md text-slate-700">
            Registration ID: <span>{regNo}</span>
          </p>
          <CopyToClipboard text={regNo} onCopy={() => toast.success("copied")}>
            <button className="bg-slate-400 py-2 px-3 rounded-md text-slate-900">
              <Copy />
            </button>
          </CopyToClipboard>
        </div>
        <div className="flex gap-4 items-center">
          <p className="py-2 px-4 bg-slate-100 rounded-md text-slate-700">
            Email ID: <span>{email}</span>
          </p>
          <CopyToClipboard text={email} onCopy={() => toast.success("copied")}>
            <button className="bg-slate-400 py-2 px-3 rounded-md text-slate-900">
              <Copy />
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
