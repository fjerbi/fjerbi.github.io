interface TechBadgeProps {
  label: string; // Define the type of 'label' as string
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="px-3 py-1 text-sm font-medium text-white bg-primary rounded-lg">
      {label}
    </span>
  );
}
