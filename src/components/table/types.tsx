export type TableConfig = Array<ColumnConfig>;

export type ColumnConfig = {
  name: keyof PersonType;
  label: string;
  width: string;
};

export type TableData = Array<PersonType>;

export type PersonType = {
  name: string;
  gender: string;
  age: number;
  eyeColor: string;
  healthRate: string;
};
