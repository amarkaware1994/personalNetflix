import React from "react";

export const formatCurrency = (amount) => {
  if (amount == null || isNaN(amount)) return "$0";

  const absAmount = Math.abs(amount);

  if (absAmount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(1).replace(".0", "")}B`;
  }

  if (absAmount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1).replace(".0", "")}M`;
  }

  if (absAmount >= 1_000) {
    return `$${(amount / 1_000).toFixed(1).replace(".0", "")}K`;
  }

  return `$${amount.toLocaleString()}`;
};


export const formatDate = (dateString) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};


export const formatRuntime = (minutes) => {
  if (minutes == null || isNaN(minutes)) return "N/A";

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (hours === 0) return `${mins}mins`;
  if (mins === 0) return `${hours}h`;

  return `${hours}h ${mins}mins`;
};