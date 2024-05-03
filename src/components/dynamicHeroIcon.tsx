import * as HIcons from "@heroicons/react/24/outline";

export default function DynamicHeroIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: string;
  className?: string;
}) {
  const { ...icons } = HIcons;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className={className} aria-hidden="true" />
    </>
  );
}
