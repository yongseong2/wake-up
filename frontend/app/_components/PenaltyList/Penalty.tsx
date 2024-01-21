interface Props {
  price: string;
  condition: string;
}

export function Penalty({ price, condition }: Props) {
  return (
    <div className="h-16 flex items-center w-full justify-between border-b-gray-200 border-b-2">
      <div className="flex items-center gap-1 font-bold">
        <div className="w-4 h-4 bg-gold rounded-full" />
        {price} 원
      </div>
      <div>{condition}</div>
    </div>
  );
}
