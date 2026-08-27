import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "Users",
  freezeTableName: true,
  paranoid: true,
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number; 
  @Column(DataType.STRING)
  declare name: string;

  @Column(DataType.STRING)    
  declare password: string;

  @Column(DataType.DATEONLY)
  declare birth: Date;

  @Column({
  type: DataType.STRING,
  unique: true,
})
  declare email: string;
}


//TODO: perguntar pro guilherme se desse jeito esta certo e bom