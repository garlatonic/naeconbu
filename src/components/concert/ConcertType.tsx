export type ConcertCartProp = {
  image: string;
  title: string;
  date: string;
  location: string;
};

export type QuickActionsProps = {
  Icon1: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  Icon2?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};
