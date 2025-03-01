import prisma from "@/lib/prisma/client";
import { User as AuthUser } from "@auth0/nextjs-auth0/types";

export const getOrCreateFromAuth = async (authUser: AuthUser) => {
  const user = await prisma.user.findFirst({
    where: { authId: authUser.sub },
  });
  if (user) {
    return user;
  }
  if (!authUser.email || !authUser.nickname) {
    throw new Error("Required fields are missing");
  }
  if (!user) {
    return prisma.user.create({
      data: {
        authId: authUser.sub,
        email: authUser.email,
        username: authUser.nickname,
      },
    });
  }
};

export const getUserByAuthId = async (authId: string) =>
  prisma.user.findUniqueOrThrow({ where: { authId } });
