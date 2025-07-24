"use client";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

export default function PdfTestPage() {
  return (
    <div style={{ height: "100vh" }}>
      <PdfViewer />
    </div>
  );
}
