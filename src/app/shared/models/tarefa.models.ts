import { StatusEnum } from "./status.enum";

export interface TarefaModel {
  id?: number;
  titulo: string;
  descricao: string;
  dataDeCriacao?: Date;
  Status?: StatusEnum;
  Responsavel?: string;
  Tags?: string[];
}
