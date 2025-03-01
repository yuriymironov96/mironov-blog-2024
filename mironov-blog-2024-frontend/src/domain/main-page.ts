import prisma from "@/lib/prisma/client";
import { Post } from "@prisma/client";

export const getMainPagePosts = async (): Promise<Post[]> => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return posts;
};
