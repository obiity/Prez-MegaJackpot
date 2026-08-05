"use client";

import React from "react";
import { ResultatsTiragesWidget } from "@/components/dashboard/ResultatsTiragesWidget";

export function SidebarDashboard() {
  return (
    <div className="space-y-6">
      <ResultatsTiragesWidget />
    </div>
  );
}

