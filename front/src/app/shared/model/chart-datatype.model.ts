export interface IChartDataModel {
  labels?: string[],
  datasets?: IDataSet[]
}
export interface IDataSet {
  label: string,
  data: number[],
  fill: boolean,
  borderColor: string
}