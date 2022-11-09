import { Timestamp } from 'rxjs';
import { Entity, Column, PrimaryGeneratedColumn, Double } from 'typeorm';


@Entity()
export class PaymentDetails {
    public constructor(init?: Partial<PaymentDetails>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    CustomerId:number;

    

    @Column()
    PaymentId:number;

    @Column()
    Total:Double;

    @Column()
     AccountNumber:number;

     @Column()
     Expire:Date;

     @Column('varchar',{length: 50})
    PatmentType;

    @Column('varchar',{length: 50})
    Provider;


  //@Column( {type: "timestamp" })
      //Updated_at;

      @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      updated_at?:Date;
    }




