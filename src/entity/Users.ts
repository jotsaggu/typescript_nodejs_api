import {Column, PrimaryGeneratedColumn, Entity} from "typeorm";

@Entity({
    name: 'users'
})
export class Users {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column({nullable: true, default: null })
    first_name?: string;

    @Column({nullable: true, default: null })
    last_name?: string;

    @Column({unique: true, charset: 'utf8', collation: 'utf8_unicode_ci'})
    email?: string;

    @Column({ nullable: true, default: null, charset: 'utf8', collation: 'utf8_unicode_ci' })
    password?: string;

    @Column({ charset: 'utf8', collation: 'utf8_unicode_ci' })
    gender?: string;

    @Column({ charset: 'utf8', collation: 'utf8_unicode_ci' })
    address?: string;

    @Column({ charset: 'utf8', collation: 'utf8_unicode_ci' })
    country?: string;

    @Column({ charset: 'utf8', collation: 'utf8_unicode_ci' })
    dob?: string;

    @Column({ unique: true, nullable: true, default: null, length: 45, charset: 'utf8', collation: 'utf8_unicode_ci' })
    phone?: string;

    @Column({ charset: 'utf8', collation: 'utf8_unicode_ci' })
    profile_picture?: string;

    @Column({ charset: 'utf8', collation: 'utf8_unicode_ci' })
    privacy_type?: string;

    @Column('enum',{ default: 1, enum: [0,1] })
    status?: number;
    
    @Column('enum',{ default: 1, enum: [0,1] })
    notification?: number;

    @Column({ nullable: true, default: null, charset: 'utf8', collation: 'utf8_unicode_ci' })
    deviceId?: string;

    @Column({ nullable: true, default: null, charset: 'utf8', collation: 'utf8_unicode_ci' })
    deviceType?: string;

    @Column({ nullable: true, default: null, charset: 'utf8', collation: 'utf8_unicode_ci' })
    reset_otp?: string;

    @Column({ nullable: true, default: null, charset: 'utf8', collation: 'utf8_unicode_ci' })
    api_token?: string;

    @Column({ nullable: true, default: null, charset: 'utf8', collation: 'utf8_unicode_ci' })
    reset_token?: string;

    @Column({ nullable: true, default: null, length: 100, charset: 'utf8', collation: 'utf8_unicode_ci' })
    remember_token?: string;

    @Column("timestamp", {nullable: true, default:  () => "CURRENT_TIMESTAMP"})
    created_at?: string;

    @Column("timestamp", {nullable: true, default:  () => "CURRENT_TIMESTAMP"})
    updated_at?: string;

}