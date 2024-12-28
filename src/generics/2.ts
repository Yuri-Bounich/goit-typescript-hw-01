type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: AllType,
  bottom: AllType
): Pick<AllType, 'color' | 'name' | 'position' | 'weight'> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

console.log(
  compare(
    { name: 'Anna', color: 'blue', position: 12, weight: 50 },
    { name: 'John', color: 'red', position: 24, weight: 36 }
  )
);
