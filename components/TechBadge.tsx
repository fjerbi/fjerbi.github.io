export default function TechBadge({ label })  : {label:any} {
    return (
      <span className="px-3 py-1 text-sm font-medium text-white bg-primary rounded-lg">
        {label}
      </span>
    );
  }
  