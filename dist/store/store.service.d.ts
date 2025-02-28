import { PrismaService } from 'src/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
export declare class StoreService {
    private prisma;
    constructor(prisma: PrismaService);
    getById(storeId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
    create(userId: string, dto: CreateStoreDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
    update(storeId: string, userId: string, dto: UpdateStoreDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
    delete(storeId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: string | null;
    }>;
}
