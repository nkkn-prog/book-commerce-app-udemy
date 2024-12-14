import { PrismaClient } from "@prisma/client";

// global変数として使う
const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined;
}

// prismaインスタンスが作成されていない時に生成する。
if(!globalForPrisma.prisma){
    globalForPrisma.prisma = new PrismaClient();
}

const prisma = globalForPrisma.prisma;

export default prisma;