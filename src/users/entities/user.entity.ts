import { Exclude } from "class-transformer";
import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../lib/base-entity";

@Entity({ name: "users" })
export class User extends BaseEntity {
  @Column({ nullable: true })
  name?: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ name: "is_active", default: true })
  isActive: boolean;

  @Column({
    name: "email_verified_at",
    type: "timestamptz",
    nullable: true,
  })
  emailVerifiedAt: string;
}
