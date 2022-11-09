import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar',{length: 50})
    Name;

    @Column()
    desc:Text;

    @Column('varchar',{length: 50})
    SKU: Text;

    @Column()
    CategoryId: number;

    @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      created_at?:Date;

      @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      updated_at?:Date;
    }




