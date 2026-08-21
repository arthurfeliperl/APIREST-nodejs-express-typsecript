import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "user",
  freezeTableName: true,
  paranoid: true,
  underscored: true,
})
export class User extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number; //'declare' serve para evitar conflito com o id base que ja vem no sequelize atual
  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.DATEONLY)
  birth!: Date;
}

//TODO: botar declare em nome,password,email, birth
//TODO: não deixat table e column vazios
