import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
// import { Post } from '../posts/post.entity';
// import { Comment } from '../comments/comment.entity';
// import { CommentLike } from '../comment-likes/comment-like.entity';
// import { Category } from '../categories/category.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, name: 'email_verified_at' })
  emailVerifiedAt: Date;

  @Column()
  password: string;

  @Column({ name: 'remember_token', nullable: true })
  rememberToken: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'theme_color', nullable: true })
  themeColor: string;

  // Relationships – optional now
//   @OneToMany(() => Post, post => post.user)
//   posts: Post[];

//   @OneToMany(() => Category, category => category.user)
//   categories: Category[];

//   @OneToMany(() => Comment, comment => comment.user)
//   comments: Comment[];

//   @OneToMany(() => CommentLike, like => like.user)
//   likes: CommentLike[];
}
