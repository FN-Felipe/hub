import type { SVGProps } from "react";

export function Logo({
  gradientId = "fa-logo",
  ...props
}: SVGProps<SVGSVGElement> & { gradientId?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          x1="12"
          y1="11"
          x2="35"
          y2="37"
        >
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="52%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>
      </defs>
      <g
        stroke={`url(#${gradientId})`}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15.5 36 L15.5 13 L33 13" />
        <path d="M15.5 24 L28 24" />
      </g>
      <circle cx="33" cy="13" r="3.5" fill={`url(#${gradientId})`} />
      <circle cx="28" cy="24" r="3.5" fill={`url(#${gradientId})`} />
    </svg>
  );
}
