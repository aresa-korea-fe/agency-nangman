import * as HIcons from "@heroicons/react/24/outline";

export default function DynamicHeroIcon(props: { icon: string }) {
  const { ...icons } = HIcons;
  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon];

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  );
}
