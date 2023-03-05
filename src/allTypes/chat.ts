export interface IChat {
  avatarImg: string | null;
  createdAt: {
    seconds: number;
  };
  id: string;
  message: string;
  nickname: string;
  roomId: string;
  userId: number;
}
