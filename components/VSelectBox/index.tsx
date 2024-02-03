import { Label } from './label';
import {
  SelectValue,
  SelectTrigger,
  SelectLabel,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from './select';

interface VSelectBoxProps {
  id: string;
  label: string;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
  selectLabel: string;
  required?: boolean;
}

export function VSelectBox({
  id,
  label,
  options,
  placeholder,
  required,
  selectLabel,
}: VSelectBoxProps) {
  return (
    <div className="flex flex-col h-screen">
      <Label htmlFor={id}>{label}</Label>
      <Select required={required}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selectLabel}</SelectLabel>
            {options.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
