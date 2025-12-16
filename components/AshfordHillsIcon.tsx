import * as React from "react";

type Props = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

export default function AshfordHillsIcon({ title, className, ...props }: Props) {
  const ariaProps = title
    ? { role: "img", "aria-label": title }
    : { "aria-hidden": true as const };

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      className={className}
      {...ariaProps}
      {...props}
    >
      {title ? <title>{title}</title> : null}

      {/* Sun */}
      <circle cx="46" cy="20" r="4.25" fill="currentColor" stroke="none" />

      {/* Hills */}
      <path d="M6 44C14 30 26 30 34 44" />
      <path d="M22 44C31 32 45 28 58 38" />

      {/* Ground line */}
      <path d="M6 48H58" opacity="0.35" />
    </svg>
  );
}

