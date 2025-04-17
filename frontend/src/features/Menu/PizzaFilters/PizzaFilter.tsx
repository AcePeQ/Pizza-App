import Select from "react-select";

interface IOptionType {
  label: string;
  value: string;
}

function PizzaFilter({
  title,
  filterOptions,
  defaultOption,
  filterType = "single",
  placeholder,
  onChange,
}: {
  title: string;
  filterType?: string;
  placeholder?: string;
  filterOptions: IOptionType[];
  defaultOption?: IOptionType | IOptionType[];
  onChange: (value: IOptionType | IOptionType[]) => void;
}) {
  console.log(defaultOption);

  return (
    <div className="text-amber-50 flex flex-col gap-3.5 border-b-2 pb-4 py-4 px-3">
      <p className="font-header text-2xl/tight font-bold text-pretty tracking-wide">
        {title}
      </p>
      {filterType === "single" && (
        <Select
          className="basic-single"
          classNamePrefix="select"
          options={filterOptions}
          value={defaultOption}
          isSearchable={false}
          onChange={(option) => onChange(option as IOptionType)}
        />
      )}

      {filterType === "multi" && (
        <Select
          isMulti
          isSearchable={true}
          value={defaultOption}
          options={filterOptions}
          className="basic-multi-select"
          classNamePrefix="select"
          placeholder={placeholder}
          onChange={(options) => onChange(options as IOptionType[])}
        />
      )}
    </div>
  );
}

export default PizzaFilter;
