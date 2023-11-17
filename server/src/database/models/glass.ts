import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  AutoIncrement,
  DataType,
} from "sequelize-typescript";
import { GlassSizes } from "../../constants";

@Table({
  tableName: "glasses",
  timestamps: true,
})
class Glass extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.CHAR(100))
  imgURL: string;

  @Column(DataType.ENUM({ values: GlassSizes }))
  size: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}

export default Glass;
